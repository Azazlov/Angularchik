import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableComponent } from 'src/app/@theme/components/ui/table/table.component';
import { EditUserComponent } from 'src/app/modules/administration/pages/users-page/components/edit-user/edit-user.component';

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [TableComponent]
})
export class SharedModule { }