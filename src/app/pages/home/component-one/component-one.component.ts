import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeroCard } from '../../../Interfaces/HomeCard.interface';
import { Banner } from '../banner/banner.component';

@Component({
  selector: 'app-home-component-one',
  standalone: true,
  imports: [CommonModule, RouterModule, Banner],
  templateUrl: './component-one.component.html',
  styleUrl: './component-one.component.css'
})
export class ComponentOne {

  protected readonly heroCards: HeroCard[] = [
    {
      iconClass: 'fa-solid fa-book-open',
      title: 'Restituire RCA',
      href: 'https://portal.axeria-iard.ro/restituiri/'
    },
    {
      iconClass: 'fa-solid fa-book-open',
      title: 'Procedura daune',
      route: '/claims-procedure'
    },
    {
      iconClass: 'fa-solid fa-phone-volume',
      title: 'Notificare Daune',
      subtitle: 'Call center 021.9110',
      href: 'tel:0219110'
    },
    {
      iconClass: 'fa-solid fa-laptop',
      title: 'Notificare Daune',
      subtitle: 'Online',
      href: 'https://www.axeria-iard.ro/notificare-dauna-axeria/index.php'
    }
  ];
}