import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { LanguageService } from '../../Services/language.service';

interface DataPartner {
    readonly nameKey: string;
    readonly purposeKey: string;
    readonly dataTypesKey: string;
    readonly privacyPolicyUrl: string;
}

@Component({
    selector: 'app-partners-data-operators',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './partners-data-operators.component.html',
    styleUrl: './partners-data-operators.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PartnersDataOperatorsComponent {
    
    protected readonly partners: readonly DataPartner[] = [
        {
            nameKey: 'partnersDataGoogleName',
            purposeKey: 'partnersDataGooglePurpose',
            dataTypesKey: 'partnersDataGoogleDataTypes',
            privacyPolicyUrl: 'https://policies.google.com/privacy'
        },
        {
            nameKey: 'partnersDataComplianzName',
            purposeKey: 'partnersDataComplianzPurpose',
            dataTypesKey: 'partnersDataComplianzDataTypes',
            privacyPolicyUrl: 'https://complianz.io/legal/privacy-statement/'
        },
        {
            nameKey: 'partnersDataWordPressName',
            purposeKey: 'partnersDataWordPressPurpose',
            dataTypesKey: 'partnersDataWordPressDataTypes',
            privacyPolicyUrl: 'https://wordpress.org/about/privacy/'
        },
        {
            nameKey: 'partnersDataCyberFolksName',
            purposeKey: 'partnersDataCyberFolksPurpose',
            dataTypesKey: 'partnersDataCyberFolksDataTypes',
            privacyPolicyUrl: 'https://cyberfolks.ro/politica-de-confidentialitate/'
        }
    ];

    private readonly destroyRef = inject(DestroyRef);
    private readonly changeDetectorRef = inject(ChangeDetectorRef);
    private readonly languageService = inject(LanguageService);

    public constructor() {
        this.languageService.currentLanguage$
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe(() => this.changeDetectorRef.markForCheck());
    }

    public t(key: string): string {
        return this.languageService.translate(key);
    }
}
