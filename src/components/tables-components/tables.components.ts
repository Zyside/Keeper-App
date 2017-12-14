import { Component, Input } from '@angular/core';
import { NavController } from "ionic-angular";
import { EditTablePage } from "../../pages/edit-table/edit-table";
import {OrderService} from "../../services/order.service";

@Component({
  selector: 'tables-component',
  templateUrl: 'tables.components.html'
})
export class TablesComponent {

  @Input('tableFree') tablesFree: any;
  @Input('tableAdmin') tablesAdmin: any;
  @Input('tableHookah') tablesHookah: any;

  constructor( public navCtrl: NavController, private orderService:OrderService) {}

  editTable(item) {
    console.log(item);

    item['status'] = this.orderService.getStatus();
    this.navCtrl.push(EditTablePage, {item:item});
    console.log(item);
  }
}
