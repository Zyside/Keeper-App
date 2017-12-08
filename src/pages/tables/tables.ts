import { Component } from '@angular/core';
import {LoadingController, ModalController} from 'ionic-angular';
import { LoadingService } from "../../providers/loading-service/loading-service";
import { NavController, NavParams } from 'ionic-angular';
import {EditTablePage} from "../edit-table/edit-table";
import {HomePage} from "../home/home";
import {TotalModalPage} from "../total-modal/total-modal"

@Component({
  selector: 'page-tables',
  templateUrl: 'tables.html',
})
export class TablesPage {
  showTotal:boolean = false;
  total: object[];
  showFree:boolean = false;
  showAdmin:boolean = false;
  showHookah:boolean = false;
  tablesFree: object[];
  tablesHookah: object[];
  tablesAdmin: object[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public loading: LoadingController, private loadingService: LoadingService,
              public modalCtrl: ModalController) {
    this.total = [
      {
      }
    ];
    this.tablesFree = [
        {
          name:'стол 1'
        },
        {
          name: 'стол 2'
        },
        {
          name: 'стол 3'
        },
        {
          name: 'стол 4'
        },
        {
          name: 'стол 5'
        },
        {
          name: 'стол 6'
        },
        {
          name: 'стол 7'
        },
        {
          name: 'стол 8'
        },
        {
          name: 'стол 9'
        },
        {
          name: 'стол 10'
        },
        {
          name: 'стол 11'
        },
        {
          name: 'стол 12'
        },
        {
          name: 'стол 13'
        },
        {
          name: 'стол 14'
        },
        {
          name: 'стол 15'
        },
        {
          name: 'стол 16'
        },
        {
          name: 'стол 17'
        },
        {
          name: 'стол 18'
        }];
      this.tablesHookah = [
        {
          name: 'стол 1'
        },
        {
          name: 'стол 2'
        },
        {
          name: 'стол 3'
        },
        {
          name: 'стол 4'
        },
        {
          name: 'стол 5'
        },
        {
          name: 'стол 6'
        },
        {
          name: 'стол 7'
        },
        {
          name: 'стол 8'
        },
        {
          name: 'стол 9'
        },
        {
          name: 'стол 10'
        },
        {
          name: 'стол 11'
        },
        {
          name: 'стол 12'
        },
        {
          name: 'стол 13'
        },
        {
          name: 'стол 14'
        },
        {
          name: 'стол 15'
        },
        {
          name: 'стол 16'
        },
        {
          name: 'стол 17'
        },
        {
          name: 'стол 18'
        }];
      this.tablesAdmin = [
        {
          name: 'Admin 1'
        },
        {
          name: 'Admin 2'
        },
        {
          name: 'Admin 3'
        },
        {
          name: 'Admin 4'
        },
        {
          name: 'Admin 5'
        }
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TablesPage');
  }

  exit() {
    this.navCtrl.push(HomePage);
  }

  presentProfileModal() {
    let profileModal = this.modalCtrl.create(TotalModalPage);
    profileModal.present();
  }
}
