import { Component } from '@angular/core';
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
    protected readonly quickCards: RcaQuickCard[] = [
        {
            title: 'Calculator RCA',
            description: 'Puteti obtine tariful informativ RCA pentru autovehiculul dvs.',
            href: 'https://portal.axeria-iard.ro/publiccalculator/',
            target: '_blank'
        },
        {
            title: 'Formular Restituire RCA',
            description: 'Cererea de restituire RCA se va transmite catre restituiri@axeria-iard.ro',
            pdfUrl: '../../assets/pdfs/Cerere-restituire-RCA.pdf'
        },
        {
            title: 'Polite BAAR',
            subtitle: 'Asigurari cu risc ridicat',
            description: 'Pentru oferta de asigurare RCA pentru risc ridicat, adresata companiei noastre.',
            href: '/rca-risc',
            target: '_self'
        }
    ];

    protected activeAccordionId: string = 'riscuri';

    protected readonly accordionItems: RcaAccordionItem[] = [
        {
            id: 'riscuri',
            title: 'Riscuri acoperite',
            content: [
                'Asiguratorul RCA are obligatia de a despagubi partea prejudiciata pentru prejudiciile dovedite suferite in urma accidentului produs prin intermediul vehiculului asigurat.',
                'Fara a se depasi limitele de raspundere prevazute in contractul RCA si in conditiile in care evenimentul asigurat s-a produs in perioada de valabilitate a contractului RCA, asiguratorul RCA acorda despagubiri in bani pentru:',
                '→ vatamari corporale sau deces, inclusiv pentru prejudicii fara caracter patrimonial;',
                '→ prejudicii materiale, inclusiv costuri de radiere si inmatriculare, costuri cu taxe de timbru, cheltuieli cu limitarea prejudiciului, dovedite cu acte;',
                '→ cheltuieli aferente diminuarii valorii vehiculului dupa reparatii, dovedite cu acte sau expertiza;',
                '→ costuri privind readucerea vehiculului la starea dinaintea evenimentului asigurat;',
                '→ prejudicii reprezentand consecinta lipsei de folosinta a vehiculului avariat;',
                '→ cheltuieli de judecata efectuate de catre persoana prejudiciata;',
                '→ cheltuieli legate de transportul vehiculului avariat, daca acesta nu se mai poate deplasa prin mijloace proprii.'
            ]
        },
        {
            id: 'limite',
            title: 'Limite de despagubire',
            content: [
                'Sunt stabilite de Autoritatea de Supraveghere Financiara.',
                'Astfel, incepand cu 2017 limitele de despagubire acordate in cazul unui accident in Romania sunt:',
                '→ pentru pagube materiale: 1.220.000 euro per accident, indiferent de numarul autovehiculelor implicate;',
                '→ pentru vatamari corporale si decese: 6.070.000 euro per accident.',
                'Pentru accidente produse in afara Romaniei, se aplica legislatia din statul respectiv precum si limitele de despagubire aferente.'
            ]
        },
        {
            id: 'legislatie',
            title: 'Legislatia aplicabila - Asigurari generale rca',
            content: [
                'Norma nr. 20/2017 privind asigurarile auto din Romania.',
                'Legea nr. 237/2015 privind autorizarea si supravegherea activitatii de asigurare si reasigurare.',
                'Legea nr. 132/2017 privind asigurarea obligatorie de raspundere civila auto pentru prejudicii produse tertilor prin accidente de vehicule si tramvaie.'
            ]
        },
        {
            id: 'decontare',
            title: 'Clauza de decontare directa',
            content: [
                'Conditii de asigurare pentru Clauza suplimentara privind Decontarea Directa, atasata politelor de asigurare de raspundere civila auto.',
                'INTRODUCERE',
                'In conformitate cu prevederile prezentei clauze si in schimbul unei prime suplimentare, Asiguratorul ofera servicii de decontare directa propriilor Asigurati RCA pentru daunele produse vehiculului asigurat prin accidente de vehicule de catre terte persoane vinovate, cu asigurare RCA valabila la data accidentului.',
                'Clauza suplimentara privind Decontarea Directa este valabila numai in cazul in care este atasata contractului de asigurare de raspundere civila auto incheiat pentru vehicul, ea neputand fi achizitionata independent de acesta.',
                'RISCURI ACOPERITE',
                'In baza prezentei clauze, Asiguratorul, prin mecanismul de decontare directa, acorda despagubiri catre propriul asigurat RCA in cazul producerii unui risc acoperit prin asigurarea RCA.'
            ]
        },
        {
            id: 'ofertare',
            title: 'Modalitati de ofertare',
            content: [
                '→ Brokeri – la agentiile partenerilor brokeri - 24/7 online pentru tarif indicativ.'
            ]
        }
    ];

    protected setActiveAccordion(itemId: string): void {
        this.activeAccordionId = this.activeAccordionId === itemId ? '' : itemId;
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