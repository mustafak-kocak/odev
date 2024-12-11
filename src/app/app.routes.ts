import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'register',
    loadComponent: () => import('./register/register.page').then((m) => m.RegisterPage),
  },
  {
    path: 'user-list',
    loadComponent: () => import('./user-list.component').then((m) => m.UserListComponent),
  },
  {
    path: 'user-details/:id',
    loadComponent: () => import('./user-list.component').then((m) => m.UserListComponent),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];