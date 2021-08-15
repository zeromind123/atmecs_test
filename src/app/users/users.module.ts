import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    MatProgressSpinnerModule,
    MatCardModule,
    MatGridListModule,
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
