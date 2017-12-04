import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular'


@Component({
  selector: 'page-edit-table',
  templateUrl: 'edit-table.html',
})
export class EditTablePage {
key:any;
arrKeys:object[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public actionSheetCtrl: ActionSheetController) {
    this.key = this.navParams.get('key');
    console.log(this.key);
    this.arrKeys.push(this.key);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditTablePage');
  }

}
