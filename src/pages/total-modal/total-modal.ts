import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TotalModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-total-modal',
  templateUrl: 'total-modal.html',
})
export class TotalModalPage {

  showTotal:boolean = false;
  table:object[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.table = this.navParams.get('table');
    console.log('KOSTYA PUSOR',this.table);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TotalModalPage');
  }

}
