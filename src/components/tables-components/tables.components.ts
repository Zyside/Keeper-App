import { Component, Input } from '@angular/core';
import {NavController, NavParams} from "ionic-angular";
import {EditTablePage} from "../../pages/edit-table/edit-table";

// import { TablesComponent } from "./tables-components.ts";

@Component({
  selector: 'tables-component',
  templateUrl: 'tables.components.html'
})
export class TablesComponent {

  @Input('data') data: TablesComponent;
  @Input('tableFree') tablesFree: any;
  @Input('tableAdmin') tablesAdmin: any;
  @Input('tableHookah') tablesHookah: any;

  constructor( public navCtrl: NavController) {}

  editTable(item) {
    console.log(item);
    this.navCtrl.push(EditTablePage, {item:item})
  }
}
