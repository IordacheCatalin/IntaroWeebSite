import { Component, DestroyRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { HeroCard } from '../../../Interfaces/HomeCard.interface';
import { Banner } from '../banner/banner.component';
import { environment } from '../../../../environments/environment';

import { Language, LanguageService } from '../../../Services/language.service';

@Component({
  selector: 'app-home-component-one',
  standalone: true,
  imports: [CommonModule, RouterModule, Banner],
  templateUrl: './component-one.component.html',
  styleUrl: './component-one.component.css'
})
export class ComponentOne {

  public currentLanguageValue: Language = 'ro';

  private readonly destroyRef = inject(DestroyRef);

  constructor(private readonly languageService: LanguageService) {
    this.languageService.currentLanguage$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(language => {
        this.currentLanguageValue = language;
      });
  }

  protected get heroCards(): HeroCard[] {
    return [
      {
        iconClass: 'fa-solid fa-book-open',
        title: this.t('heroCard1'),
        href: this.restitutionUrl
      },
      {
        iconClass: 'fa-solid fa-book-open',
        title: this.t('heroCard2'),
        route: '/claims-procedure'
      },
      {
        iconClass: 'fa-solid fa-phone-volume',
        title: this.t('heroCard3'),
        subtitle: 'Call center 021.9110',
        href: 'tel:0219110'
      },
      {
        iconClass: 'fa-solid fa-laptop',
        title: this.t('heroCard4'),
        subtitle: this.t('heroCard5'),
        href: environment.notificationDamageUrl
      }
    ];
  }

  public get restitutionUrl(): string {
    return this.languageService.getRestitutionUrl();
  }

  public t(key: string): string {
    return this.languageService.translate(key);
  }
}