import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';

import { LanguageService } from '../../Services/language.service';
import { Banner } from '../home/banner/banner.component';

interface TranslationPair {
  readonly titleKey: string;
  readonly descriptionKey: string;
}

interface RecipientRow {
  readonly recipientKey: string;
  readonly dataKey: string;
  readonly purposeKey: string;
  readonly locationKey: string;
  readonly protectionKey: string;
}

@Component({
  selector: 'app-gdprPolicy',
  standalone: true,
  imports: [CommonModule, RouterLink, Banner],
  templateUrl: './gdprPolicy.component.html',
  styleUrl: './gdprPolicy.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GdprPolicyComponent {
  protected readonly definitions: readonly TranslationPair[] = [
    {
      titleKey: 'gdprDefinitionAxeriaTitle',
      descriptionKey: 'gdprDefinitionAxeriaText'
    },
    {
      titleKey: 'gdprDefinitionOperatorTitle',
      descriptionKey: 'gdprDefinitionOperatorText'
    },
    {
      titleKey: 'gdprDefinitionProcessorTitle',
      descriptionKey: 'gdprDefinitionProcessorText'
    },
    {
      titleKey: 'gdprDefinitionDataSubjectTitle',
      descriptionKey: 'gdprDefinitionDataSubjectText'
    },
    {
      titleKey: 'gdprDefinitionGdprTitle',
      descriptionKey: 'gdprDefinitionGdprText'
    },
    {
      titleKey: 'gdprDefinitionInsuredTitle',
      descriptionKey: 'gdprDefinitionInsuredText'
    },
    {
      titleKey: 'gdprDefinitionIntermediateArchiveTitle',
      descriptionKey: 'gdprDefinitionIntermediateArchiveText'
    },
    {
      titleKey: 'gdprDefinitionPersonalDataTitle',
      descriptionKey: 'gdprDefinitionPersonalDataText'
    },
    {
      titleKey: 'gdprDefinitionLawTitle',
      descriptionKey: 'gdprDefinitionLawText'
    },
    {
      titleKey: 'gdprDefinitionPolicyTitle',
      descriptionKey: 'gdprDefinitionPolicyText'
    },
    {
      titleKey: 'gdprDefinitionProcessingTitle',
      descriptionKey: 'gdprDefinitionProcessingText'
    },
    {
      titleKey: 'gdprDefinitionRightsTitle',
      descriptionKey: 'gdprDefinitionRightsText'
    },
    {
      titleKey: 'gdprDefinitionSiteTitle',
      descriptionKey: 'gdprDefinitionSiteText'
    },
    {
      titleKey: 'gdprDefinitionDevicesTitle',
      descriptionKey: 'gdprDefinitionDevicesText'
    },
    {
      titleKey: 'gdprDefinitionUsersTitle',
      descriptionKey: 'gdprDefinitionUsersText'
    }
  ];

  protected readonly processingSources: readonly string[] = [
    'gdprProcessingSourceDirect',
    'gdprProcessingSourceIntermediaries',
    'gdprProcessingSourcePublic'
  ];

  protected readonly recipients: readonly RecipientRow[] = [
    {
      recipientKey: 'gdprRecipientCyberfolks',
      dataKey: 'gdprRecipientCyberfolksData',
      purposeKey: 'gdprRecipientCyberfolksPurpose',
      locationKey: 'gdprRecipientRomania',
      protectionKey: 'gdprRecipientAppropriate'
    },
    {
      recipientKey: 'gdprRecipientIntaro',
      dataKey: 'gdprRecipientIntaroMaintenanceData',
      purposeKey: 'gdprRecipientIntaroMaintenancePurpose',
      locationKey: 'gdprRecipientRomania',
      protectionKey: 'gdprRecipientAppropriate'
    },
    {
      recipientKey: 'gdprRecipientIntaro',
      dataKey: 'gdprRecipientIntaroPlatformData',
      purposeKey: 'gdprRecipientIntaroPlatformPurpose',
      locationKey: 'gdprRecipientRomania',
      protectionKey: 'gdprRecipientAppropriate'
    }
  ];

  protected readonly rightsSummary: readonly string[] = [
    'gdprRightsSummaryAccess',
    'gdprRightsSummaryCorrection',
    'gdprRightsSummaryDeletion',
    'gdprRightsSummaryRestriction',
    'gdprRightsSummaryPortability',
    'gdprRightsSummaryObjection',
    'gdprRightsSummaryPostMortem'
  ];

  protected readonly accessInformation: readonly string[] = [
    'gdprAccessInfoPurposes',
    'gdprAccessInfoCategories',
    'gdprAccessInfoRecipients',
    'gdprAccessInfoRetention',
    'gdprAccessInfoRights',
    'gdprAccessInfoComplaint',
    'gdprAccessInfoSource',
    'gdprAccessInfoAutomatedDecisions'
  ];

  protected readonly deletionReasons: readonly string[] = [
    'gdprDeletionReasonA',
    'gdprDeletionReasonB',
    'gdprDeletionReasonC',
    'gdprDeletionReasonD',
    'gdprDeletionReasonE',
    'gdprDeletionReasonF'
  ];

  protected readonly restrictionReasons: readonly string[] = [
    'gdprRestrictionReasonA',
    'gdprRestrictionReasonB',
    'gdprRestrictionReasonC',
    'gdprRestrictionReasonD'
  ];

  protected readonly portabilityConditions: readonly string[] = [
    'gdprPortabilityConditionA',
    'gdprPortabilityConditionB'
  ];

  protected readonly postMortemInformation: readonly string[] = [
    'gdprPostMortemInformationAccess',
    'gdprPostMortemInformationAssets',
    'gdprPostMortemInformationAccount'
  ];

  private readonly destroyRef = inject(DestroyRef);
  private readonly changeDetectorRef = inject(ChangeDetectorRef);
  private readonly languageService = inject(LanguageService);

  public constructor() {
    this.languageService.currentLanguage$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.changeDetectorRef.markForCheck();
      });
  }

  public t(key: string): string {
    return this.languageService.translate(key);
  }
}