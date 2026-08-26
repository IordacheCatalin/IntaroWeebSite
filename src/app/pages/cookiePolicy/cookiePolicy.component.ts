import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Language, LanguageService } from '../../Services/language.service';
import { Banner } from '../home/banner/banner.component';

interface CookieTableRow {
  provider: string;
  name: string;
  purpose: string;
  duration: string;
}

@Component({
  selector: 'app-cookiePolicy',
  standalone: true,
  imports: [CommonModule, Banner],
  templateUrl: './cookiePolicy.component.html',
  styleUrl: './cookiePolicy.component.css'
})
export class CookiePolicyComponent {
  private readonly destroyRef = inject(DestroyRef);

  protected currentLanguageValue: Language = 'ro';
  protected strictlyNecessaryCookies: CookieTableRow[] = [];
  protected functionalCookies: CookieTableRow[] = [];

  constructor(private readonly languageService: LanguageService) {
    this.languageService.currentLanguage$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(language => {
        this.currentLanguageValue = language;
        this.setTranslatedCookieTables();
      });
  }

  public t(key: string): string {
    return this.languageService.translate(key);
  }

  protected openCookieSettings(): void {
    const consentButton = document.querySelector<HTMLButtonElement>('.cmplz-manage-consent');
    consentButton?.click();
  }

  private setTranslatedCookieTables(): void {
    const sessionDuration = this.t('cookiePolicyDurationSession');
    const oneYearDuration = this.t('cookiePolicyDurationOneYear');

    this.strictlyNecessaryCookies = [
      {
        provider: this.t('cookiePolicyProviderElementor'),
        name: this.t('cookiePolicyNameEGlobals'),
        purpose: this.t('cookiePolicyPurposeEGlobals'),
        duration: sessionDuration
      },
      {
        provider: this.t('cookiePolicyProviderWordPress'),
        name: this.t('cookiePolicyNameWpAdmin'),
        purpose: this.t('cookiePolicyPurposeWpAdmin'),
        duration: sessionDuration
      },
      {
        provider: this.t('cookiePolicyProviderElementor'),
        name: this.t('cookiePolicyNameElementor'),
        purpose: this.t('cookiePolicyPurposeElementor'),
        duration: this.t('cookiePolicyDurationPersistent')
      },
      {
        provider: this.t('cookiePolicyProviderWordPress'),
        name: this.t('cookiePolicyNameWordPressLoggedIn'),
        purpose: this.t('cookiePolicyPurposeWordPressLoggedIn'),
        duration: sessionDuration
      },
      {
        provider: this.t('cookiePolicyProviderComplianz'),
        name: this.t('cookiePolicyNameComplianzFunctional'),
        purpose: this.t('cookiePolicyPurposeComplianzFunctional'),
        duration: oneYearDuration
      },
      {
        provider: this.t('cookiePolicyProviderPhpServer'),
        name: this.t('cookiePolicyNamePhpSessionId'),
        purpose: this.t('cookiePolicyPurposePhpSessionId'),
        duration: sessionDuration
      }
    ];

    this.functionalCookies = [
      {
        provider: this.t('cookiePolicyProviderElementor'),
        name: this.t('cookiePolicyNameElementorDefaults'),
        purpose: this.t('cookiePolicyPurposeElementorDefaults'),
        duration: sessionDuration
      },
      {
        provider: this.t('cookiePolicyProviderAdobeFonts'),
        name: this.t('cookiePolicyNameAdobeCleanFontAdded'),
        purpose: this.t('cookiePolicyPurposeAdobeCleanFontAdded'),
        duration: sessionDuration
      },
      {
        provider: this.t('cookiePolicyProviderComplianz'),
        name: this.t('cookiePolicyNameComplianzPreferences'),
        purpose: this.t('cookiePolicyPurposeComplianzPreferences'),
        duration: oneYearDuration
      },
      {
        provider: this.t('cookiePolicyProviderWordPressThirdParty'),
        name: this.t('cookiePolicyNameWpEmojiSettingsSupports'),
        purpose: this.t('cookiePolicyPurposeWpEmojiSettingsSupports'),
        duration: sessionDuration
      },
      {
        provider: this.t('cookiePolicyProviderWordPressThirdParty'),
        name: this.t('cookiePolicyNameWpSettings'),
        purpose: this.t('cookiePolicyPurposeWpSettings'),
        duration: sessionDuration
      },
      {
        provider: this.t('cookiePolicyProviderBlocksyFirstParty'),
        name: this.t('cookiePolicyNameBlocksyConsent'),
        purpose: this.t('cookiePolicyPurposeBlocksyConsent'),
        duration: oneYearDuration
      },
      {
        provider: this.t('cookiePolicyProviderWordPressThirdParty'),
        name: this.t('cookiePolicyNameWpSettingsTime'),
        purpose: this.t('cookiePolicyPurposeWpSettingsTime'),
        duration: oneYearDuration
      },
      {
        provider: this.t('cookiePolicyProviderWordPressThirdParty'),
        name: this.t('cookiePolicyNameWordPressTestCookie'),
        purpose: this.t('cookiePolicyPurposeWordPressTestCookie'),
        duration: sessionDuration
      },
      {
        provider: this.t('cookiePolicyProviderComplianzThirdParty'),
        name: this.t('cookiePolicyNameComplianzStatistics'),
        purpose: this.t('cookiePolicyPurposeComplianzStatistics'),
        duration: oneYearDuration
      }
    ];
  }
}