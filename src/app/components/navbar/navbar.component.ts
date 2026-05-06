import { Component, DestroyRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { Language, LanguageService } from '../../Services/language.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  public currentLanguageValue: Language = 'ro';

  private readonly destroyRef = inject(DestroyRef);

  constructor(private readonly languageService: LanguageService) {
    this.languageService.currentLanguage$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(language => {
        this.currentLanguageValue = language;
      });
  }

  public changeLanguage(language: Language): void {
    this.languageService.setLanguage(language);
  }

  public t(key: string): string {
    return this.languageService.translate(key);
  }
}