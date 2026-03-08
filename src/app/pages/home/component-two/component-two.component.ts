import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-component-two',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component-two.component.html',
  styleUrl: './component-two.component.css'
})
export class ComponenTwo {
protected readonly timelineItems = [
    {
      eyebrow: 'Evolutia pe piata asigurarilor auto',
      title: 'APRILIE 2021',
      description:
        'AXERIA IARD a fost achizitionata integral de catre grupul Watford Holdings Ltd, procesul de schimbare al actionariatului fiind finalizat in Aprilie 2021.'
    },
    {
      eyebrow: '',
      title: 'NOIEMBRIE 2021',
      description:
        'La inceputul lunii Noiembrie 2021, Watford Holdings si Watford Re au devenit Somers Group Holdings si Somers Re, rating-ul “A-” fiind reconfirmat de catre agentia internationala de rating AM Best. Aceasta tranzactie, prin care AXERIA IARD a fost achizitionata de catre Grupul Watford, reprezinta un adevarat punct de cotitura in istoria companiei si pozitioneaza AXERIA IARD intr-un grup international puternic si dinamic. Prin aceasta achizitie grupul Watford/Somers continua strategia de dezvoltare in piata de asigurari Europeana post Brexit. Grupul Somers (ex. Watford) este prezent pe piata din Romania inca din anul 2018, iar prin compania AXERIA IARD va continua sa ofere produse de asigurare clientilor din Romania, demonstrand interes pentru o prezenta de lunga durata pe o piata cu un potential ridicat de dezvoltare.'
    },
    {
      eyebrow: '',
      title: '2021',
      description:
        'AXERIA IARD continua parteneriatul strategic al grupului cu compania INTARO, ce va oferi servicii specializate la nivelul intregii tari, in special privind instrumentarea si administrarea portofoliului de daune, folosind solutii IT de ultima generatie, unul dintre obiectivele principale ale AXERIA IARD fiind despagubirea rapida si corecta a clientilor din portofoliu.'
    }
  ];
}