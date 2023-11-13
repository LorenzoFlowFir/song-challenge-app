import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'more-challenge-page',
    loadComponent: () =>
      import('./pages/more-challenge-page/more-challenge-page.page').then(
        (m) => m.MoreChallengePagePage
      ),
  },
];
