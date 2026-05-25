import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LanguageService } from '../../../Services/language.service';

@Component({
  selector: 'app-home-component-two',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component-two.component.html',
  styleUrl: './component-two.component.css'
})
export class ComponenTwo {

  constructor(private readonly languageService: LanguageService) {}

  protected get timelineItems() {
    return [
      {
        eyebrow: this.t('timelineEyebrow1'),
        title: this.t('timelineYear1'),
        description: this.t('timelineDescription1')
      },
      {
        eyebrow: '',
        title: this.t('timelineYear2'),
        description: this.t('timelineDescription2')
      },
      {
        eyebrow: '',
        title: this.t('timelineYear3'),
        description: this.t('timelineDescription3')
      }
    ];
  }

  public t(key: string): string {
    return this.languageService.translate(key);
  }
}