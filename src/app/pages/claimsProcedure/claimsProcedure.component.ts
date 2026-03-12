import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type ClaimsSection = 'procedure' | 'romania' | 'abroad' | 'direct-settlement' | 'forms';

@Component({
  selector: 'app-claimsProcedure',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './claimsProcedure.component.html',
  styleUrl: './claimsProcedure.component.css'
})
export class ClaimsProcedure {
  protected activeSection: ClaimsSection = 'procedure';

  protected readonly coveredItems: string[] = [
    'vehiculele implicate: marca / tip auto, numere de inmatriculare, culoare, tip caroserie, localizare avarii, etc.;',
    'care au luat parte la eveniment: nume soferi / pasageri / martori, date contact, etc.;',
    'ziua, ora, locatia, puncte de localizare (nume strazi conexe, numarul strazii / soselei / bloc / casa, etc.);',
    'carosabil: tip pavaj, numar benzi de circulatie, ax demarcare, etc.;'
  ];

  protected readonly workflowItems: string[] = [
    'managementul daunelor;',
    'constatarea daunelor si colectarea documentelor necesare instrumentarii dosarului de dauna;',
    'comunicarea rapida cu institutiile statului (ASF, Politie, etc.), cu forme de exercitare a profesiei de avocat si experti tehnici;',
    'analizarea dinamicii si reconstituirea accidentului, privind stabilirea cauzelor si imprejurarilor producerii evenimentului;',
    'citirea, colectarea si interpretarea erorilor generate de catre sistemele electronice ale vehiculului;',
    'accesarea soft-urilor profesionale pentru piese auto;',
    'analizarea manualelor de service furnizate de catre uzina producatoare pentru fiecare model de vehicul;',
    'analizarea istoricului de intretinere / daunabilitate in retelele reparatorilor autorizati;',
    'analizarea vocala.'
  ];

  protected readonly documentItems: string[] = [
    'polita de asigurare a vehiculului vinovat;',
    'actul de identitate (C.I./buletin) al persoanei care face notificarea;',
    'certificatul de inmatriculare (talon)/cartea de identitate a vehiculului avariat;',
    'permisul de conducere al soferului pagubit;',
    'constatarea amiabila de accident sau documentele emise de autoritati (politie/pompieri/etc.);',
    'datele proprietarului vehiculului pagubit;',
    'alte documente in functie de evenimentul care a avut loc.'
  ];

  protected readonly romaniaSteps: string[] = [
    'Pas 1 - Momentul accidentului',
    'Pas 2 - Notificarea daunei (in max. 5 zile lucratoare de la momentul accidentului)',
    'Pas 3 - Contactarea beneficiarului politei de asigurare',
    'Pas 4 - Constatarea avariilor si colectarea documentelor',
    'Pas 5 - Despagubirea'
  ];

  protected readonly directSettlementItems: string[] = [
    'accidentul auto s-a produs pe teritoriul Romaniei;',
    'vehiculele implicate in accidentul auto sunt inmatriculate / inregistrate in Romania;',
    'prejudiciile sunt produse exclusiv vehiculelor (exista doar daune materiale, fara vatamari corporale);',
    'ambele vehicule implicate in accidentul auto au asigurare RCA valabila la data evenimentului;',
    'prejudiciile exclud vatamarile corporale.'
  ];

  protected readonly directSettlementDocuments: string[] = [
    'polita de asigurare obligatorie RCA al vehiculului asigurat – copie;',
    'actul de identitate al pagubitului sau reprezentantului acestuia (C.I. / buletin) – original;',
    'permisul de conducere al soferului pagubit (daca vehiculul era condus la momentul evenimentului) – original;',
    'certificatul de inmatriculare (talon) sau cartea de identitate a autovehiculului pagubit – original;',
    'actul de identitate (C.I. / Buletin) si permisul soferului vinovat (daca este posibil) – copie;',
    'polita de asigurare obligatorie RCA a vehiculului vinovat (sau cel putin dovada existentei acesteia) – copie;',
    'Constatarea Amiabila de Accident sau Documentul emis de catre Autoritati (Proces Verbal Politie / Pompieri, Autorizatie de Reparatie, Anexa 2, etc.) – original;',
    'imputernicirea de reprezentare (P.J.) / procura notariala (P.F.), in cazul in care soferul care se prezinta la constatare nu este proprietarul vehiculului avariat – original;',
    'alte documente, in functie de evenimentul care a avut loc.'
  ];

  protected readonly directSettlementExtraDocs: string[] = [
    'declaratii suplimentare si/sau schita accidentului;',
    'documente care atesta dreptul de proprietate asupra vehiculului, in cazul in care acesta nu este inmatriculat/inregistrat fiscal de catre noul proprietar;',
    'fotografii ale autovehiculului avariat;',
    'copii pasaport, etc.'
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

  protected scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}