import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list.component';
import { UserDetailsComponent } from './user-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/user-list', pathMatch: 'full' },
  { path: 'user-list', component: UserListComponent },
  { path: 'user-details/:id', component: UserDetailsComponent }, // Dinamik parametre eklendi
  { path: '**', redirectTo: '/user-list', pathMatch: 'full' }, // Hatalı rotaları user-list'e yönlendir
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
