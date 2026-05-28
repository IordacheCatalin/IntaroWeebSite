import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { LanguageService } from '../../Services/language.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  constructor(private readonly languageService: LanguageService) { }

  public t(key: string): string {
    return this.languageService.translate(key);
  }

  protected readonly currentYear = new Date().getFullYear();
}