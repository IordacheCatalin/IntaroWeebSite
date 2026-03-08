import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-component-three',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component-three.component.html',
  styleUrl: './component-three.component.css'
})
export class ComponentThree {
  protected readonly valueCards = [
    {
      iconClass: 'fa-solid fa-lightbulb',
      title: 'Puterea echipei',
      description: 'Puterea companiei noastre se datoreaza aptitudinilor singulare care se unesc in slujba unei ambitii colective.'
    },
    {
      iconClass: 'fa-regular fa-handshake',
      title: 'Respect',
      description: 'In calitate de asiguratori, lucram intr-un spirit de transparenta si onestitate. Ne tratam clientii cu respect si umanitate mai ales in situatii dificile.'
    },
    {
      iconClass: 'fa-solid fa-people-group',
      title: 'Coeziune',
      description: 'Suntem accesibili si disponibili preferand dialogul cu clientii si partenerii nostri.'
    },
    {
      iconClass: 'fa-regular fa-gem',
      title: 'Munca inteligenta',
      description: 'Solutiile noastre sunt flexibile si personalizate pentru clientii si partenerii nostri.'
    }
  ];
}