import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { roTranslations } from '../i18n/ro';
import { enTranslations } from '../i18n/en';

export type Language = 'ro' | 'en';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly currentLanguageSubject = new BehaviorSubject<Language>('ro');

  readonly currentLanguage$ = this.currentLanguageSubject.asObservable();

  private readonly translationsMap: Record<Language, Record<string, string>> = {
    ro: roTranslations,
    en: enTranslations
  };

  setLanguage(language: Language): void {
    this.currentLanguageSubject.next(language);
  }

  getCurrentLanguage(): Language {
    return this.currentLanguageSubject.value;
  }

  translate(key: string): string {
    return this.translationsMap[this.getCurrentLanguage()][key] ?? key;
  }
}