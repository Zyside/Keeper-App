import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TotalModalPage } from './total-modal';

@NgModule({
  declarations: [
    TotalModalPage,
  ],
  imports: [
    IonicPageModule.forChild(TotalModalPage),
  ],
})
export class TotalModalPageModule {}
