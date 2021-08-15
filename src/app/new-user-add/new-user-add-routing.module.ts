import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewUserAddComponent } from './new-user-add.component';

const routes: Routes = [{ path: '', component: NewUserAddComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewUserAddRoutingModule { }
