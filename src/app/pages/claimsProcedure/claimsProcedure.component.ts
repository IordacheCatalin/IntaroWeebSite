import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { Banner } from '../home/banner/banner.component';

import { Language, LanguageService } from '../../Services/language.service';

type ClaimsSection = 'procedure' | 'romania' | 'abroad' | 'direct-settlement' | 'forms';
type RomaniaStep = 1 | 2 | 3 | 4 | 5;
type RomaniaStepOneTab = 'amiabil' | 'politie' | null;
type RomaniaStepFourTab = 'damage-assessment' | 'document-collection' | null;
type RomaniaStepFiveTab = 'three-day-payment' | 'partner-repair-shop' | 'total-economic-loss' | 'other-repair-shop' | null;

type FormItem = {
  title: string;
  pdfUrl: string;
  iconUrl: string;
  iconAlt: string;
};
@Component({
  selector: 'app-claimsProcedure',
  standalone: true,
  imports: [CommonModule, Banner],
  templateUrl: './claimsProcedure.component.html',
  styleUrl: './claimsProcedure.component.css'
})
export class ClaimsProcedure {
  
  private readonly destroyRef = inject(DestroyRef);

  protected currentLanguageValue: Language = 'ro';

  protected activeSection: ClaimsSection = 'procedure';
  protected activeRomaniaStep: RomaniaStep | null = null;
  protected activeRomaniaStepOneTab: RomaniaStepOneTab = null;
  protected activeRomaniaStepFourTab: RomaniaStepFourTab = null;
  protected activeRomaniaStepFiveTab: RomaniaStepFiveTab = null;

  protected coveredItems: string[] = [];
  protected workflowItems: string[] = [];
  protected documentItems: string[] = [];
  protected romaniaSteps: string[] = [];
  protected directSettlementItems: string[] = [];
  protected directSettlementDocuments: string[] = [];
  protected directSettlementExtraDocs: string[] = [];
  protected formsItems: FormItem[] = [];


    constructor(private readonly languageService: LanguageService) {
    this.languageService.currentLanguage$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(language => {
        this.currentLanguageValue = language;
        this.setTranslatedContent();
      });
  }

  public t(key: string): string {
    return this.languageService.translate(key);
  }

  private setTranslatedContent(): void {
    this.coveredItems = this.list('claimsCoveredItems');
    this.workflowItems = this.list('claimsWorkflowItems');
    this.documentItems = this.list('claimsDocumentItems');
    this.romaniaSteps = this.list('claimsRomaniaSteps');
    this.directSettlementItems = this.list('claimsDirectSettlementItems');
    this.directSettlementDocuments = this.list('claimsDirectSettlementDocuments');
    this.directSettlementExtraDocs = this.list('claimsDirectSettlementExtraDocs');

    this.formsItems = [
      { title: this.t('claimsFormDriverRomania'), pdfUrl: 'assets/pdfs/declaratie-accident-sofer-romania-AXERIA.pdf', iconUrl: 'assets/Icons/accident_1.png', iconAlt: this.t('claimsFormDriverRomaniaAlt') },
      { title: this.t('claimsFormDriverAbroad'), pdfUrl: 'assets/pdfs/declaratie-accident-sofer-afara-romaniei-AXERIA.pdf', iconUrl: 'assets/Icons/accident_2.png', iconAlt: this.t('claimsFormDriverAbroadAlt') },
      { title: this.t('claimsFormCompensationRequest'), pdfUrl: 'assets/pdfs/Cerere-Despagubire-AXERIA.pdf', iconUrl: 'assets/Icons/accident_3.png', iconAlt: this.t('claimsFormCompensationRequestAlt') },
      { title: this.t('claimsFormOtherAccountPayment'), pdfUrl: 'assets/pdfs/cerere-plata-alt-cont-AXERIA.pdf', iconUrl: 'assets/Icons/accident_4.png', iconAlt: this.t('claimsFormOtherAccountPaymentAlt') },
      { title: this.t('claimsFormGdprLetter'), pdfUrl: 'assets/pdfs/scrisoare-gdpr-AXERIA.pdf', iconUrl: 'assets/Icons/accident_5.png', iconAlt: this.t('claimsFormGdprLetterAlt') }
    ];
  }

  private list(key: string): string[] {
    return this.t(key).split('\n').filter(item => item.trim().length > 0);
  }

  protected openRepairShops(): void {
    window.open('https://example.com/unitati-reparatoare', '_blank', 'noopener,noreferrer');
  }

  protected showSection(section: ClaimsSection): void {
    this.activeSection = section;

    if (section === 'romania') {
      this.activeRomaniaStep = null;
    }

    setTimeout(() => {
      const targetElement = document.getElementById('claims-dynamic-content');
      if (!targetElement) {
        return;
      }

      const navbarOffset = 108;
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarOffset;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    });
  }

  protected toggleRomaniaStep(step: RomaniaStep): void {
    this.activeRomaniaStep = this.activeRomaniaStep === step ? null : step;
  }

  protected toggleRomaniaStepOneTab(tab: Exclude<RomaniaStepOneTab, null>): void {
    this.activeRomaniaStepOneTab = this.activeRomaniaStepOneTab === tab ? null : tab;
  }

  protected toggleRomaniaStepFourTab(tab: Exclude<RomaniaStepFourTab, null>): void {
    this.activeRomaniaStepFourTab = this.activeRomaniaStepFourTab === tab ? null : tab;
  }

  protected toggleRomaniaStepFiveTab(tab: Exclude<RomaniaStepFiveTab, null>): void {
    this.activeRomaniaStepFiveTab = this.activeRomaniaStepFiveTab === tab ? null : tab;
  }

  protected scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}