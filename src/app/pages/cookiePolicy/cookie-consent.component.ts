import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, ElementRef, EventEmitter, HostListener, inject, Input, OnDestroy, OnInit, Output, PLATFORM_ID, ViewChild, } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { LanguageService } from '../../Services/language.service';

export type CookieConsentChoice = 'accepted' | 'rejected' | 'custom';
export type OptionalCookieCategory = 'preferences' | 'analytics' | 'marketing';

export interface CookieConsentSettings {
    necessary: true;
    preferences: boolean;
    analytics: boolean;
    marketing: boolean;
}

export interface CookieConsentRecord extends CookieConsentSettings {
    choice: CookieConsentChoice;
    expiresAt: number;
}

const SECONDS_PER_DAY = 60 * 60 * 24;

const DEFAULT_SETTINGS: CookieConsentSettings = {
    necessary: true,
    preferences: false,
    analytics: false,
    marketing: false,
};

@Component({
    selector: 'app-cookie-consent',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './cookie-consent.component.html',
    styleUrl: './cookie-consent.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CookieConsentComponent implements OnInit, OnDestroy {
    @Input() public cookieName = 'site_cookie_consent_v1';
    @Input() public consentDurationDays = 30;
    @Input() public cookiePolicyUrl = '/cookie-policy';
    @Input() public privacyPolicyUrl = '/politica-confidentialitate';
    @Input() public partnersUrl = '/lista-partenerilor-si-operatorilor-de-date';

    @Output() public readonly consentChanged = new EventEmitter<CookieConsentRecord>();

    /** Opțional: util dacă aplicația părinte vrea să știe când modalul s-a închis. */
    @Output() public readonly closed = new EventEmitter<void>();

    @ViewChild('dialogPanel')
    private dialogPanel?: ElementRef<HTMLElement>;

    public isReady = false;
    public isModalOpen = false;
    public activeView: 'overview' | 'preferences' = 'overview';
    public hasSavedConsent = false;
    public settings: CookieConsentSettings = { ...DEFAULT_SETTINGS };

    private readonly document = inject(DOCUMENT);
    private readonly platformId = inject(PLATFORM_ID);
    private readonly isBrowser = isPlatformBrowser(this.platformId);
    private readonly languageService = inject(LanguageService);
    private readonly destroyRef = inject(DestroyRef);
    private readonly changeDetectorRef = inject(ChangeDetectorRef);

    private previousBodyOverflow = '';
    private didLockBodyScroll = false;

    public constructor() {
        this.languageService.currentLanguage$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
            this.changeDetectorRef.markForCheck();
        });
    }

    public t(key: string): string {
        return this.languageService.translate(key);
    }

    public ngOnInit(): void {
        if (!this.isBrowser) {
            return;
        }

        const savedConsent = this.readConsent();

        if (savedConsent) {
            this.settings = this.settingsFrom(savedConsent);
            this.hasSavedConsent = true;

            window.setTimeout(() => {
                this.notifyConsent(savedConsent);
            }, 0);
        } else {
            this.openModal('overview');
        }

        this.isReady = true;
    }

    public ngOnDestroy(): void {
        if (this.isBrowser) {
            this.unlockPageScroll();
        }
    }

    public acceptAll(): void {
        this.persistConsent(
            {
                necessary: true,
                preferences: true,
                analytics: true,
                marketing: true,
            },
            'accepted',
        );
    }

    public rejectOptional(): void {
        this.persistConsent({ ...DEFAULT_SETTINGS }, 'rejected');
    }

    public savePreferences(): void {
        this.persistConsent(this.settings, 'custom');
    }

    public openPreferences(): void {
        const savedConsent = this.readConsent();

        if (savedConsent) {
            this.settings = this.settingsFrom(savedConsent);
        }

        this.openModal('preferences');
    }

    public showPreferences(): void {
        this.activeView = 'preferences';
        this.focusDialog();
    }

    public closeModal(): void {
        this.isModalOpen = false;
        this.activeView = 'overview';
        this.unlockPageScroll();
        this.closed.emit();
    }

    public updateCategory(
        category: OptionalCookieCategory,
        event: Event,
    ): void {
        const input = event.target as HTMLInputElement;

        this.settings = {
            ...this.settings,
            [category]: input.checked,
        };
    }

    @HostListener('document:keydown.escape')
    public onEscapePressed(): void {
        if (this.isModalOpen) {
            this.closeModal();
        }
    }

    private openModal(view: 'overview' | 'preferences'): void {
        this.activeView = view;
        this.isModalOpen = true;
        this.lockPageScroll();
        this.focusDialog();
    }

    private persistConsent(
        settings: CookieConsentSettings,
        choice: CookieConsentChoice,
    ): void {
        const maxAge = Math.max(1, this.consentDurationDays) * SECONDS_PER_DAY;
        const record: CookieConsentRecord = {
            ...settings,
            necessary: true,
            choice,
            expiresAt: Date.now() + maxAge * 1000,
        };
        const secure = this.document.location.protocol === 'https:' ? '; Secure' : '';

        this.document.cookie =
            `${this.cookieName}=${encodeURIComponent(JSON.stringify(record))}` +
            `; Max-Age=${maxAge}; Path=/; SameSite=Lax${secure}`;

        this.settings = this.settingsFrom(record);
        this.hasSavedConsent = true;
        this.notifyConsent(record);

        this.closeModal();
    }

    private notifyConsent(record: CookieConsentRecord): void {
        this.consentChanged.emit(record);

        this.document.defaultView?.dispatchEvent(
            new CustomEvent<CookieConsentRecord>(
                'cookie-consent-change',
                {
                    detail: record,
                },
            ),
        );
    }

    private readConsent(): CookieConsentRecord | null {
        const cookiePrefix = `${this.cookieName}=`;
        const rawValue = this.document.cookie
            .split('; ')
            .find((cookie) => cookie.startsWith(cookiePrefix))
            ?.slice(cookiePrefix.length);

        if (!rawValue) {
            return null;
        }

        try {
            const value = JSON.parse(
                decodeURIComponent(rawValue),
            ) as Partial<CookieConsentRecord>;

            if (
                typeof value.expiresAt !== 'number' ||
                value.expiresAt <= Date.now() ||
                !['accepted', 'rejected', 'custom'].includes(value.choice ?? '')
            ) {
                this.deleteConsentCookie();
                return null;
            }

            return {
                necessary: true,
                preferences: Boolean(value.preferences),
                analytics: Boolean(value.analytics),
                marketing: Boolean(value.marketing),
                choice: value.choice as CookieConsentChoice,
                expiresAt: value.expiresAt,
            };
        } catch {
            this.deleteConsentCookie();
            return null;
        }
    }

    private deleteConsentCookie(): void {
        this.document.cookie =
            `${this.cookieName}=; Max-Age=0; Path=/; SameSite=Lax`;
    }

    private settingsFrom(
        record: Pick<
            CookieConsentRecord,
            'preferences' | 'analytics' | 'marketing'
        >,
    ): CookieConsentSettings {
        return {
            necessary: true,
            preferences: Boolean(record.preferences),
            analytics: Boolean(record.analytics),
            marketing: Boolean(record.marketing),
        };
    }

    private lockPageScroll(): void {
        if (
            !this.isBrowser ||
            this.didLockBodyScroll ||
            this.document.body.style.overflow === 'hidden'
        ) {
            return;
        }

        this.previousBodyOverflow =
            this.document.body.style.overflow;

        this.document.body.style.overflow = 'hidden';
        this.didLockBodyScroll = true;
    }

    private unlockPageScroll(): void {
        if (!this.isBrowser || !this.didLockBodyScroll) {
            return;
        }

        this.document.body.style.overflow =
            this.previousBodyOverflow;

        this.didLockBodyScroll = false;
    }

    private focusDialog(): void {
        if (!this.isBrowser) {
            return;
        }

        window.setTimeout(() => this.dialogPanel?.nativeElement.focus(), 0);
    }
}