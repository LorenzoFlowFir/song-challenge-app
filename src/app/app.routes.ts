import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'more-challenge-page',
    loadComponent: () =>
      import('./pages/more-challenge-page/more-challenge-page.page').then(
        (m) => m.MoreChallengePagePage
      ),
  },
];
