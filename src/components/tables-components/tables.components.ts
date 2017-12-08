import { Component, Input } from '@angular/core';
import { NavController } from "ionic-angular";
import { EditTablePage } from "../../pages/edit-table/edit-table";

@Component({
  selector: 'tables-component',
  templateUrl: 'tables.components.html'
})
export class TablesComponent {

  @Input('tableFree') tablesFree: any;
  @Input('tableAdmin') tablesAdmin: any;
  @Input('tableHookah') tablesHookah: any;

  constructor( public navCtrl: NavController) {}

  editTable(item) {
    console.log(item);
    this.navCtrl.push(EditTablePage, {item:item})
  }
}
