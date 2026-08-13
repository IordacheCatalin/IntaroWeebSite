import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Language, LanguageService } from '../../Services/language.service';
import { CommonModule } from '@angular/common';
import { Banner } from '../home/banner/banner.component';

interface RcaQuickCard {
    title: string;
    subtitle?: string;
    description: string;
    href?: string;
    pdfUrl?: string;
    target?: '_self' | '_blank';
}

interface RcaAccordionItem {
    id: string;
    title: string;
    content: string[];
}

@Component({
    selector: 'app-rca',
    standalone: true,
    imports: [CommonModule, Banner],
    templateUrl: './rca.component.html',
    styleUrl: './rca.component.css'
})

export class RcaComponent {

    private readonly destroyRef = inject(DestroyRef);

    protected currentLanguageValue: Language = 'ro';
    protected quickCards: RcaQuickCard[] = [];
    protected accordionItems: RcaAccordionItem[] = [];
    protected activeAccordionId = '';

    constructor(private readonly languageService: LanguageService) {
        this.languageService.currentLanguage$
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe(language => {
                this.currentLanguageValue = language;
                this.setTranslatedQuickCards();
                this.setTranslatedAccordionItems();
            });
    }

    public t(key: string): string {
        return this.languageService.translate(key);
    }

    private setTranslatedQuickCards(): void {
        this.quickCards = [
            {
                title: this.t('rcaCalculatorTitle'),
                description: this.t('rcaCalculatorDescription'),
                href: 'https://portal.axeria-iard.ro/publiccalculator/',
                target: '_blank'
            },
            {
                title: this.t('rcaRefundFormTitle'),
                description: this.t('rcaRefundFormDescription'),
                pdfUrl: 'assets/pdfs/Cerere-restituire-RCA.pdf'
            },
            {
                title: this.t('rcaBaarPoliciesTitle'),
                subtitle: this.t('rcaBaarPoliciesSubtitle'),
                description: this.t('rcaBaarPoliciesDescription'),
                href: '/rca-risc',
                target: '_self'
            }
        ];
    }

    private setTranslatedAccordionItems(): void {
        this.accordionItems = [
            {
                id: 'riscuri',
                title: this.t('rcaCoveredRisksTitle'),
                content: this.t('rcaCoveredRisksContent').split('\n')
            },
            {
                id: 'limite',
                title: this.t('rcaAccordionLimitsTitle'),
                content: this.t('rcaAccordionLimitsContent').split('\n')
            },
            {
                id: 'legislatie',
                title: this.t('rcaAccordionLegislationTitle'),
                content: this.t('rcaAccordionLegislationContent').split('\n')
            },
            {
                id: 'decontare',
                title: this.t('rcaAccordionDirectSettlementTitle'),
                content: this.t('rcaAccordionDirectSettlementContent').split('\n')
            },
            {
                id: 'ofertare',
                title: this.t('rcaAccordionOffersTitle'),
                content: this.t('rcaAccordionOffersContent').split('\n')
            }
        ];
    }

    protected setActiveAccordion(itemId: string): void {
        const isSameItem = this.activeAccordionId === itemId;
        const accordionElement = document.getElementById(`accordion-${itemId}`);

        if (!accordionElement) {
            this.activeAccordionId = isSameItem ? '' : itemId;
            return;
        }

        if (isSameItem) {
            this.activeAccordionId = '';
            return;
        }

        const headerOffset = 100;
        const elementTop = accordionElement.getBoundingClientRect().top + window.scrollY;
        const scrollTarget = elementTop - headerOffset;

        window.scrollTo({
            top: scrollTarget,
            behavior: 'smooth'
        });

        setTimeout(() => {
            this.activeAccordionId = itemId;
        }, 250);
    }
    protected isAccordionOpen(itemId: string): boolean {
        return this.activeAccordionId === itemId;
    }

    protected handleCardClick(card: RcaQuickCard): void {
        if (card.pdfUrl) {
            const link = document.createElement('a');
            link.href = card.pdfUrl;
            link.download = '';
            link.click();
            return;
        }

        if (card.href) {
            if (card.target === '_blank') {
                window.open(card.href, '_blank');
            } else {
                window.location.href = card.href;
            }
        }
    }
}