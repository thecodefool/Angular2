import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

import { UsersComponent } from './users/users.component';
import { EmailBlastComponent } from "app/admin/email-blast/email-blast.component";

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [AdminComponent, EmailBlastComponent, UsersComponent]
})
export class AdminModule { }
