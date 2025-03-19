import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { AdministrationRoutingModule } from './administration-routing';
import { FormsModule } from '@angular/forms';
import { RizhiComponentComponent } from './pages/users-page/component/rizhi-component/rizhi-component.component';
import { AddUserFormComponent } from './pages/users-page/components/add-user-form/add-user-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdminPageComponent,
    UsersPageComponent,
    RizhiComponentComponent,
    AddUserFormComponent
  ],

  imports: [
    AdministrationRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})

export class AdministrationModule { }