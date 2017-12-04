import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditTablePage } from './edit-table';

@NgModule({
  declarations: [
    EditTablePage,
  ],
  imports: [
    IonicPageModule.forChild(EditTablePage),
  ],
})
export class EditTablePageModule {}
