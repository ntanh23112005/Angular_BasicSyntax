import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Product } from './product/product';
import { AuthGuard } from './guard/auth-guard';

export const routes: Routes = [
  // các routes
  { path: '', component: Home },
  { path: 'product/:id', component: Product },
  {
    path: 'admin',
    loadComponent: () => import('./admin/admin').then((c) => c.Admin),
    canActivate: [AuthGuard],
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./register/register').then((c) => c.RegisterComponent),
  },
];
