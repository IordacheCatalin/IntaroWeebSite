import { Component, computed, EventEmitter, inject, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import {  CookieConsentComponent,  type CookieConsentRecord,} from './pages/cookiePolicy/cookie-consent.component';
import { StartupOverlayComponent } from './pages/startupOverlay/startup-overlay.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent, StartupOverlayComponent, CookieConsentComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  public showStartupOverlay = true;
  private readonly router = inject(Router);
  private readonly hiddenLayoutRoutes: string[] = [
    '/login',
    '/admin',
    '/checkout',
    '/settings',
  ];

  protected readonly shouldShowLayout = computed(() => {
    const currentUrl = this.router.url ?? '';
    return !this.hiddenLayoutRoutes.some((routePrefix) => currentUrl.startsWith(routePrefix));
  });

  protected readonly mainClass = computed(() => {
    return this.shouldShowLayout() ? 'main' : 'main-app';
  });

  constructor() {
    // Ensure computed values update on navigation
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(() => {
        // No-op. Reading router.url in computed + navigation triggers change detection.
      });
  }

  public onOverlayClosed(): void {
    this.showStartupOverlay = false;
  }

  public onCookieConsentChanged(
    consent: CookieConsentRecord
  ): void {
    if (consent.analytics) {
      console.log('Analytics consent granted. Initializing analytics services...'+ JSON.stringify(consent));
    }

    if (consent.marketing) {
    console.log('Marketing consent granted. Initializing marketing services...'+ JSON.stringify(consent));
    }

    if (consent.preferences) {
      console.log('Preferences consent granted. Initializing preferences services...'+ JSON.stringify(consent));
    }

    if (consent.necessary) {
      console.log('Necessary consent granted. Initializing necessary services...'+ JSON.stringify(consent));
    }
  }

}