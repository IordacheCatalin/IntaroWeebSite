import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { LanguageService } from '../../../Services/language.service';

@Component({
  selector: 'app-home-component-three',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './component-three.component.html',
  styleUrl: './component-three.component.css'
})
export class ComponentThree {

  constructor(private readonly languageService: LanguageService) {}

  protected get valueCards() {
    return [
      {
        iconClass: 'fa-solid fa-lightbulb',
        title: this.t('valueCardTitle1'),
        description: this.t('valueCardDescription1')
      },
      {
        iconClass: 'fa-regular fa-handshake',
        title: this.t('valueCardTitle2'),
        description: this.t('valueCardDescription2')
      },
      {
        iconClass: 'fa-solid fa-people-group',
        title: this.t('valueCardTitle3'),
        description: this.t('valueCardDescription3')
      },
      {
        iconClass: 'fa-regular fa-gem',
        title: this.t('valueCardTitle4'),
        description: this.t('valueCardDescription4')
      }
    ];
  }

  public t(key: string): string {
    return this.languageService.translate(key);
  }
}