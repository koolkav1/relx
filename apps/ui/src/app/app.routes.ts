import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeStateModule)},
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
