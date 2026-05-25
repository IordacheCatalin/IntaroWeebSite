import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LanguageService } from '../../../Services/language.service';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class Banner {
  constructor(private readonly languageService: LanguageService) { }

  public t(key: string): string {
    return this.languageService.translate(key);
  }
}