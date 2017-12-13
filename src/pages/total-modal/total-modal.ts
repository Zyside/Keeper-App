import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {OrderService} from "../../services/order.service";


@IonicPage()
@Component({
  selector: 'page-total-modal',
  templateUrl: 'total-modal.html',
})
export class TotalModalPage {
  dataArr: any;
  showTotal: boolean = false;
  orderArray:object[]=[];
  sum:string='';

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private orderService: OrderService) {
    this.dataArr =  this.orderService.getData();
  }

  showInfoAboutOrder(data){
    this.orderArray.length = 0;
    for(let key in data['order']){
      this.orderArray.push(data['order'][key]);
    }
    this.sum = data['sum'];
  }

  ionViewDidLoad() {
    console.log(this.orderService.getData());
  };

}
