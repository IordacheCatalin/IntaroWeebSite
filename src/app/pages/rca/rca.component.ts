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

    protected activeAccordionId: string = '';

    protected readonly accordionItems: RcaAccordionItem[] = [
        {
            id: 'riscuri',
            title: 'Riscuri acoperite',
            content: [
                'Asigurari generale rca',
                ' ',
                '(1) Asiguratorul RCA are obligatia de a despagubi partea prejudiciata pentru prejudiciile dovedite suferite în urma accidentului produs prin intermediul vehiculului asigurat.',
                '(2) Fara a se depasi limitele de raspundere prevazute în contractul RCA si în conditiile in care evenimentul asigurat s-a produs in perioada de valabilitate a contractului RCA, asiguratorul RCA acorda despagubiri in bani pentru:',
                '→ vatamari corporale sau deces, inclusiv pentru prejudicii fara caracter patrimonial;',
                '→ prejudicii materiale, inclusiv costuri de radiere si înmatriculare, costuri cu taxe de timbru, cheltuieli cu limitarea prejudiciului, dovedite cu acte, cheltuieli aferente diminuarii valorii vehiculului dupa reparatii, dovedite cu acte sau expertiza;',
                '→ costuri privind readucerea vehiculului la starea dinaintea evenimentului asigurat, dovedite cu documente emise prin sisteme specializate sau prin documente emise în conditiile legii;',
                '→ prejudicii reprezentand consecinaa lipsei de folosinta a vehiculului avariat, inclusiv inlocuirea temporara a vehiculului, pe baza optiunii persoanei prejudiciate;',
                '→ cheltuieli de judecata efectuate de catre persoana prejudiciata sau cheltuieli aferente in cazul solutionarii alternative a litigiului daca solutia este favorabila persoanei prejudiciate si daca sumele reprezentand cheltuieli de judecata sunt mentionate in dispozitivul hotararii judecatoresti;',
                '→ cheltuielile legate de transportul vehiculului avariat, apartinand tertului pagubit, de la locul accidentului la locatia în care se gaseste centrul de constatare daune, la unitatea reparatoare aleasa de pagubit in vederea repararii vehiculului, cel/cea mai apropiat/apropiata de locul producerii accidentului sau de domiciliul persoanei prejudiciate, dupa caz, daca respectivul vehicul nu se mai poate deplasa prin mijloace proprii, iar asiguratorul nu asigura transportul.',
                ' ',
                'Asigurari generale rca',
                ' ',
                '(3) Indiferent de locul in care s-a produs accidentul de vehicul – pe drumuri publice, pe drumuri care nu sunt deschise circulatiei publice, in incinte si in orice alte locuri, atat in timpul deplasarii, cat si in timpul stationarii vehiculului asigurat, asiguratorul RCA acorda despagubiri pana la limita de raspundere prevazuta in contractul RCA pentru:',
                '→ prejudiciul produs de dispozitivele sau instalatiile cu care a fost echipat vehiculul, inclusiv pentru prejudiciul produs din cauza desprinderii accidentale a remorcii, semiremorcii ori a atasului tractat de vehicul;',
                '→ prejudiciul produs din culpa conducatorului vehiculului asigurat;',
                '→ prejudiciul produs prin fapta lucrului, cand prejudiciul isi are cauza in insusirile, actiunea sau inactiunea vehiculului, prin intermediul altui lucru antrenat de deplasarea vehiculului, prin scurgerea, risipirea ori caderea accidentala a substantelor, materialelor sau a obiectelor transportate;',
                '→ prejudiciile provocate tertilor, drept consecinta a deschiderii usilor vehiculului, in timpul mersului sau atunci cand vehiculul este oprit ori stationeaza, de catre pasagerii acestuia, fara asigurarea ca nu se pune in pericol siguranta deplasarii celorlalti participanti la trafic;',
                '→ prejudiciile provocate tertilor, drept consecinta a conducerii vehiculului sub influenta bauturilor alcoolice sau a stupefiantelor.',
                ' ',
                'Asigurari generale rca',
                ' ',
                '(4) Prevederile alin. (3) lit. b) se aplica inclusiv in cazurile in care la data accidentului conducatorul vehiculului:',
                '→ a condus vehiculul fara consimtamantul expres sau prezumat al asiguratului;',
                '→ nu este titularul unui permis care atesta dreptul sa conduca vehiculul respectiv;',
                '→ nu a respectat obligatiile legale cu privire la starea si siguranta vehiculului respectiv.',
                ' ',
                '(5) Membrii familiei asiguratului, conducatorului auto sau oricarei altei persoane a carei raspundere civila este angajata intr-un accident de vehicule si este acoperita de asigurarea obligatorie RCA nu sunt exclusi de la beneficiul asigurarii pentru propriile lor vatamari corporale.'
            ]
        },
        {
            id: 'limite',
            title: 'Limite de despagubire',
            content: [
                ' ',
                'Sunt stabilite de Autoritatea de Supraveghere Financiara.Astfel, incepand cu 2017 limitele de despagubire acordate in cazul unui accident in Romania sunt:',
                '→ pentru pagube materiale: 1.220.000 euro per accident, indiferent de numarul autovehiculelor implicate;',
                '→ pentru vatamari corporale si decese: 6.070.000 euro per accident.',
                'Pentru accidente produse in afara Romaniei, se aplica legislatia din statul respectiv precum si limitele de despagubire aferente.'
            ]
        },
        {
            id: 'legislatie',
            title: 'Legislatia aplicabila - Asigurari generale rca',
            content: [
                ' ',
                'Norma nr. 20/2017 privind asigurarile auto din România',
                ' ',
                'Legea nr. 237/ 2015 privind autorizarea si supravegherea activitatii de asigurare si reasigurare',
                ' ',
                'Legea nr.132/2017 privind asigurarea obligatorie de raspundere civila auto pentru prejudicii produse tertilor prin accidente de vehicule si tramvaie'
            ]
        },
        {
            id: 'decontare',
            title: 'Clauza de decontare directa',
            content: [
                ' ',
                'Conditii de asigurare pentru Clauza suplimentara privind Decontarea Directa, atasata politelor de asigurare de raspundere civila auto.',
                ' ',
                'INTRODUCERE',
                ' ',
                'In conformitate cu prevederile prezentei clauze si in schimbul unei prime suplimentare, Asiguratorul ofera servicii de decontare directa propriilor Asigurati RCA pentru daunele produse vehiculului asigurat prin accidente de vehicule de catre terte persoane vinovate, cu asigurare RCA valabila la data accidentului.',
                ' ',
                'Clauza suplimentara privind Decontarea Directa este valabila numai in cazul in care este atasata contractului de asigurare de raspundere civila auto incheiat pentru vehicul, ea neputand fi achizitionata independent de acesta.',
                ' ',
                'RISCURI ACOPERITE',
                ' ',
                'In baza prezentei clauze, Asiguratorul, prin mecanismul de decontare directa, acorda despagubiri catre propriul asigurat RCA in cazul producerii unui risc acoperit prin asigurarea RCA. Prin decontare directa se acorda despagubiri doar pentru:',
                ' ',
                '→ prejudicii materiale, inclusiv costuri de radiere si inmatriculare, costuri cu taxe de timbru, cheltuieli cu limitarea prejudiciului, dovedite cu acte, cheltuieli aferente diminuarii valorii vehiculului dupa reparatii, dovedite cu acte sau expertiza; ',
                '→ costuri privind readucerea vehiculului la starea dinaintea evenimentului asigurat, dovedite cu documente emise prin sisteme specializate sau documente emise in conditiile legii;',
                '→ prejudicii reprezentand consecinta lipsei de folosinta a vehiculului avariat, inclusiv inlocuirea temporara a vehiculului, pe baza optiunii persoanei prejudiciate; ',
                '→ cheltuieli de judecata efectuate de catre persoana prejudiciata sau cheltuieli aferente in cazul solutionarii alternative a litigiului daca solutia este favorabila persoanei prejudiciate; ',
                '→ cheltuieli legate de transportul vehiculului avariat, apartinand asiguratului, de la locul accidentului la locatia in care se gaseste centrul de constatare daune, la unitatea reparatoare aleasa de Asigurat in vederea repararii vehiculului, cel/cea/mai apropiat/apropiata de locul producerii accidentului sau de domiciliul asiguratului, dupa caz, daca repectivul vehicul nu se mai poate deplasa prin mijloace proprii. ',
                ' ',
                'CONDIȚII DE APLICARE A CLAUZEI SUPLIMENTARE DE DECONTARE DIRECTĂ – Asigurari generale rca ',
                ' ',
                'Decontarea directa intre Asiguratorii RCA este aplicabila numai la indeplinirea cumulativa a urmatoarelor conditii: ',
                ' ',
                '→ accidentele auto se produc pe teritoriul României; ',
                '→ vehiculele implicate in accidentele auto sunt inmatriculate / inregistrate in Romania; ',
                '→ prejudiciile sunt produse exclusiv vehiculelor; ',
                '→ ambele vehicule implicate in accidentul auto au asigurare RCA valabila la data evenimentului; ',
                '→ prejudiciile exclud vatamarile corporale. ',
                'Decontarea directa nu afecteaza dreptul persoanei prejudiciate in urma unui accident auto produs de un vehicul asigurat RCA de a exercita actiunea directa pentru recuperarea prejudiciului produs impotriva asiguratorului RCA al persoanei vinovate de producerea accidentului auto. ',
                ' ',
                'EXCLUDERI ',
                ' ',
                'Asiguratorul nu acopera situatiile excluse de catre legislatia in materie de asigurari RCA care se regaseste postata pe site-ul Asiguratorului la urmatoarea adresa: www.axeria-iard.ro. ',
                ' ',
                'Prezenta Clauza privind decontarea directa se poate achizitiona de catre Asigurat doar odata cu incheierea asigurarii RCA, fiind parte a acesteia. Astfel, prezenta clauza isi inceteaza valabilitatea odata cu incetarea, din orice motive, a asigurarii RCA. Prezenta clauza nu poate fi denuntata sau reziliata separat. ',
                ' ',
                'In cazul în care Asiguratul datoreaza prime sau rate de prim la data pltii despagubirii, Asiguratorul poate retine din despagubire atat primele/ratele de prima a caror scadenta a fost depasita, cat si ratele scadente viitoare aferente contractului/politei de asigurare la care este anexata prezenta clauza. '
            ]
        },
        {
            id: 'ofertare',
            title: 'Modalitati de ofertare',
            content: [
                ' ',
                '→ Brokeri – la agentiile partenerilor brokeri -24/7 online pentru tarif indicativ',
                ' '
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