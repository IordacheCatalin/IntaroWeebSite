import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../app/pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'home',
    loadComponent: () =>
      import('../app/pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'clauza-decontare',
    loadComponent: () =>
      import('../app/pages/directSettlement/directSettlement.component').then(m => m.DirectSettlement)
  },
  {
    path: 'brokeri',
    loadComponent: () =>
      import('../app/pages/parteners/parteners.component').then(m => m.BrokersComponent)
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('../app/pages/contact/contact.component').then(m => m.ContactComponent)
  },
  {
    path: 'claims-procedure',
    loadComponent: () =>
      import('./pages/claimsProcedure/claimsProcedure.component').then(m => m.ClaimsProcedure)
  },
  {
    path: 'cookie-policy',
    loadComponent: () =>
      import('./pages/cookiePolicy/cookiePolicy.component').then(m => m.CookiePolicyComponent)
  },
  {
    path: 'petitii-online',
    loadComponent: () =>
      import('./pages/onlinePetitions/petitii-online.component').then(m => m.PetitiiOnlineComponent)
  },
  {
    path: 'terms-conditions',
    loadComponent: () =>
      import('./pages/cookiePolicy/termsConditions.component').then(m => m.TermsConditionsComponent)
  },
  {
    path: 'gdpr-policy',
    loadComponent: () =>
      import('./pages/cookiePolicy/gdprPolicy.component').then(m => m.GdprPolicyComponent)
  },
  {
    path: 'rca',
    loadComponent: () =>
      import('./pages/rca/rca.component').then(m => m.RcaComponent)
  },
  
  {
    path: 'rca-risc',
    loadComponent: () =>
      import('./pages/rcaRisc/rcaRisc.component').then(m => m.RcaRiscComponent)
  },


  


  {
    path: '**',
    redirectTo: 'home'
  }
];