import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Banner } from '../home/banner/banner.component';

type PetitionTabKey =
  | 'scope'
  | 'domain'
  | 'reference-documents'
  | 'definitions'
  | 'responsibilities'
  | 'activity-description';

@Component({
  selector: 'app-petitii-online',
  standalone: true,
  imports: [CommonModule, Banner],
  templateUrl: './petitii-online.component.html',
  styleUrl: './petitii-online.component.css'
})
export class PetitiiOnlineComponent {
  protected activeTab: PetitionTabKey = 'scope';

  protected readonly petitionStats = [
    {
      label: 'Numarul total de petitii inregistrate unic per petent si per caz',
      previousYear: '739',
      currentYearCumulative: '153',
      january: '70',
      february: '83',
      march: ''
    },
    {
      label: 'Numarul total de petitii intemeiate (solutionate favorabil), inregistrate unic per petent si per caz',
      previousYear: '88',
      currentYearCumulative: '25',
      january: '10',
      february: '15',
      march: ''
    },
    {
      label: 'Numarul de petitii intemeiate (solutionate favorabil) referitoare la dosare de dauna',
      previousYear: '79',
      currentYearCumulative: '23',
      january: '9',
      february: '14',
      march: ''
    },
    {
      label: 'Numarul total de petitii pentru care dosarele de dauna au fost achitate',
      previousYear: '59',
      currentYearCumulative: '21',
      january: '7',
      february: '14',
      march: ''
    },
    {
      label: 'Numarul total de petitii finalizate nefavorabil, inregistrate unic per petent si per caz',
      previousYear: '650',
      currentYearCumulative: '129',
      january: '60',
      february: '69',
      march: ''
    }
  ];

  protected readonly alternativeDisputeStats = [
    {
      label: 'Numarul total al solicitarilor de solutionare alternativa a litigiilor',
      previousYear: '0',
      currentYearCumulative: '0',
      january: '0',
      february: '0',
      march: '0'
    },
    {
      label: 'Numarul total al solicitarilor de solutionare alternativa a litigiilor solutionate efectiv',
      previousYear: '0',
      currentYearCumulative: '0',
      january: '0',
      february: '0',
      march: '0'
    },
    {
      label: 'Numarul total al solicitarilor de solutionare alternativa a litigiilor solutionate favorabil asiguratilor, contractantilor, beneficiarilor, persoanelor prejudiciate sau reprezentantilor acestora',
      previousYear: '0',
      currentYearCumulative: '0',
      january: '0',
      february: '0',
      march: '0'
    }
  ];

  protected setActiveTab(tabKey: PetitionTabKey): void {
    this.activeTab = tabKey;
  }
}