import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { AdministrationRoutingModule } from './administration-routing';
import { FormsModule } from '@angular/forms';
import { RizhiComponentComponent } from './pages/users-page/component/rizhi-component/rizhi-component.component';

@NgModule({
  declarations: [
    AdminPageComponent,
    UsersPageComponent,
    RizhiComponentComponent
  ],

  imports: [
    AdministrationRoutingModule,
    CommonModule,
    FormsModule
  ]
})

export class AdministrationModule { }