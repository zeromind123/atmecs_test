import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
  { path: 'new-user-add', loadChildren: () => import('./new-user-add/new-user-add.module').then(m => m.NewUserAddModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
