import { NgModule } from '@angular/core';

import { TablesComponent } from './tables-components/tables.components';
import {IonicModule} from "ionic-angular";

@NgModule({
  declarations: [TablesComponent],
  imports: [IonicModule],
  exports: [TablesComponent]
})
export class ComponentsModule {}
