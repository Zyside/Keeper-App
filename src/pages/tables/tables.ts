import { Component } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { LoadingService } from "../../providers/loading-service/loading-service";
import { NavController, NavParams } from 'ionic-angular';
import {EditTablePage} from "../edit-table/edit-table";

@Component({
  selector: 'page-tables',
  templateUrl: 'tables.html',
})
export class TablesPage {
  tables:object[]=[{
    status:'free',
    dishes:[],
  },
    {
      status:'busy',
      dishes:[{
        name:'stake',
        price:25
      }],
    }];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public loading: LoadingController,
              private loadingService: LoadingService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TablesPage');
  }
  editTable(key){
  // console.log(key);
    this.loadingService.showLoading();
    this.navCtrl.push(EditTablePage,{key:key});
    this.loadingService.closeLoading();

  }
}
