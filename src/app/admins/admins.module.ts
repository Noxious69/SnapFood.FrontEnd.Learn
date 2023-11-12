import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminsRoutingModule } from './admins-routing.module';
import { AdminsComponent } from './admins.component';
import { UsersComponent } from './pages/users/users.component';
import { DataGridComponent } from '../shared/data-grid/data-grid.component';


@NgModule({
  declarations: [
    AdminsComponent,
    UsersComponent,
    
  ],
  imports: [
    CommonModule,
    AdminsRoutingModule,
    DataGridComponent,
    
  ]
})
export class AdminsModule { }
