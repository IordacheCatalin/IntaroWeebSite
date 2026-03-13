import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Banner } from '../home/banner/banner.component';

type ClaimsSection = 'procedure' | 'romania' | 'abroad' | 'direct-settlement' | 'forms';
type RomaniaStep = 1 | 2 | 3 | 4 | 5;
type RomaniaStepOneTab = 'amiabil' | 'politie' | null;
type RomaniaStepFourTab = 'damage-assessment' | 'document-collection' | null;
type RomaniaStepFiveTab = 'three-day-payment' | 'partner-repair-shop' | 'total-economic-loss' | 'other-repair-shop' | null;

@Component({
  selector: 'app-claimsProcedure',
  standalone: true,
  imports: [CommonModule, Banner],
  templateUrl: './claimsProcedure.component.html',
  styleUrl: './claimsProcedure.component.css'
})
export class ClaimsProcedure {
  protected activeSection: ClaimsSection = 'procedure';
  protected activeRomaniaStep: RomaniaStep | null = null;
  protected activeRomaniaStepOneTab: RomaniaStepOneTab = null;
  protected activeRomaniaStepFourTab: RomaniaStepFourTab = null;
  protected activeRomaniaStepFiveTab: RomaniaStepFiveTab = null;

  protected readonly coveredItems: string[] = [
    '→ vehiculele implicate: marcă / tip auto, numere de înmatriculare, culoare, tip caroserie, localizare avarii, etc.;',
    '→ care au luat parte la eveniment: nume şoferi / pasageri / martori, date contact, etc.;',
    '→ ziua, ora, locaţia, puncte de localizare (nume străzi conexe, numărul străzii / şoselei / bloc / casă, etc.);',
    '→ carosabil: tip pavaj, număr benzi de circulaţie, ax demarcare, etc.'
  ];

  protected readonly workflowItems: string[] = [
    '→ managementul daunelor;',
    '→ constatarea daunelor şi colectarea documentelor necesare instrumentării dosarului de daună;',
    '→ comunicarea rapidă cu instituţiile statului (ASF, Poliţie, etc.), cu forme de exercitare a profesiei de avocat şi experţi tehnici;',
    '→ analizarea dinamicii şi reconstituirea accidentului, privind stabilirea cauzelor şi împrejurărilor producerii evenimentului;',
    '→ citirea, colectarea şi interpretarea erorilor generate de către sistemele electronice ale vehiculului;',
    '→ accesarea soft-urilor profesionale pentru piese auto;',
    '→ analizarea manualelor de service furnizate de către uzina producătoare pentru fiecare model de vehicul;',
    '→ analizarea istoricului de intreţinere / daunalitate în reţelele reparatorilor autorizaţi;',
    '→ analizarea vocală.'
  ];

  protected readonly documentItems: string[] = [
    '→ polita de asigurare a vehiculului vinovat;',
    '→ actul de identitate (C.I./buletin) al persoanei care face notificarea;',
    '→ certificatul de inmatriculare (talon)/cartea de identitate a vehiculului avariat;',
    '→ permisul de conducere al soferului pagubit;',
    '→ constatarea amiabila de accident sau documentele emise de autoritati (politie/pompieri/etc.);',
    '→ datele proprietarului vehiculului pagubit;',
    '→ alte documente in functie de evenimentul care a avut loc.'
  ];

  protected readonly romaniaSteps: string[] = [
    'Pas 1 - Momentul accidentului',
    'Pas 2 - Notificarea daunei (in max. 5 zile lucratoare de la momentul accidentului)',
    'Pas 3 - Contactarea beneficiarului politei de asigurare',
    'Pas 4 - Constatarea avariilor si colectarea documentelor',
    'Pas 5 - Despagubirea'
  ];

  protected readonly directSettlementItems: string[] = [
    '→ accidentul auto s-a produs pe teritoriul Romaniei;',
    '→ vehiculele implicate in accidentul auto sunt inmatriculate / inregistrate in Romania;',
    '→ prejudiciile sunt produse exclusiv vehiculelor (exista doar daune materiale, fara vatamari corporale);',
    '→ ambele vehicule implicate in accidentul auto au asigurare RCA valabila la data evenimentului;',
    '→ prejudiciile exclud vatamarile corporale.'
  ];

  protected readonly directSettlementDocuments: string[] = [
    '→ poliţa de asigurare obligatorie RCA al vehiculului asigurat – copie;',
    '→ actul de identitate al păgubitului sau reprezentantului acestuia (C.I. / buletin) – original;',
    '→ permisul de conducere al şoferului păgubit (dacă vehiculul era condus la momentul evenimentului) – original;',
    '→ certificat de înmatriculare (talon) sau cartea de identitate a autovehiculului păgubit – original;',
    '→ actul de identitate (C.I. / Buletin) şi permisul şoferului vinovat (dacă este posibil) – copie;',
    '→ poliţa de asigurare obligatorie RCA a vehiculului vinovat (sau cel puţin dovada existenţei acesteia) – copie;',
    '→ Constatarea Amiabilă de Accident sau Documentul emis de către Autorităţi (Proces Verbal Poliţie / Pompieri, Autorizaţie de Reparaţie, Anexa 2, etc.) – original;',
    '→ împuternicirea de reprezentare (P.J.) / procură notarială (P.F.), în cazul în care şoferul care se prezintă la constatare nu este proprietarul vehiculului avariat – original;',
    '→ alte documente, în funcţie de evenimentul care a avut loc.'
  ];

  protected readonly directSettlementExtraDocs: string[] = [
    '→ declaraţii suplimentare şi/sau schiţa accidentului;',
    '→ documente care atestă dreptul de proprietate asupra vehiculului, în cazul în care acesta nu este înmatriculat/înregistrat fiscal de către noul proprietar;',
    '→ fotografii ale autovehiculului avariat;',
    '→ copii paşaport, etc.'
  ];

  protected readonly formsItems = [
    {
      title: 'Declaratie accident sofer in Romania',
      pdfUrl: '../../../assets/pdfs/declaratie-accident-sofer-romania-AXERIA.pdf'
    },
    {
      title: 'Declaratie accident sofer in afara Romaniei',
      pdfUrl: '../../../assets/pdfs/declaratie-accident-sofer-afara-romaniei-AXERIA.pdf'
    },
    {
      title: 'Cerere despagubire',
      pdfUrl: '../../../assets/pdfs/Cerere-Despagubire-AXERIA.pdf'
    },
    {
      title: 'Cerere de plata in alt cont (REGIE PROPRIE)',
      pdfUrl: '../../../assets/pdfs/cerere-plata-alt-cont-AXERIA.pdf'
    },
    {
      title: 'Scrisoare GDPR',
      pdfUrl: '../../../assets/pdfs/scrisoare-gdpr-AXERIA.pdf'
    }
  ];

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