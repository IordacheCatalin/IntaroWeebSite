import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
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
}