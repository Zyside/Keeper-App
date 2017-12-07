import { ActionSheetController } from 'ionic-angular';
import {Component} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-edit-table',
  templateUrl: 'edit-table.html',
})
export class EditTablePage {

  table: object[];
  showBar: boolean = false;
  showHookah:boolean = false;
  showKitchen:boolean = false;
  showArray: object[] = [];

  french:object[];
  japan:object[];
  launch:object[];
  roms: object[];
  vodkas: object[];
  whiskeys: object[];
  totalScore: object[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public actionSheetCtrl: ActionSheetController) {
    this.table = this.navParams.get('item');
    console.log('parvm table------>', this.table);
    this.whiskeys = [
      {
        name: 'Jack Daneils',
        price: 70,
        volume: 0.04
      },
      {
        name: 'Jim Beam',
        price: 65,
        volume: 0.04
      },
      {
        name: 'Jameson',
        price: 60,
        volume: 0.04
      }
    ];
    this.roms = [
      {
        name: 'Okharte',
        price: 50,
        volume: 0.04
      },
      {
        name: 'Bacardi',
        price: 70,
        volume: 0.04
      },
      {
        name: 'Capitan Morgan',
        price: 45,
        volume: 0.04
      }
    ];
    this.vodkas = [
      {
        name: 'Finland',
        price: 50,
        volume: 0.04
      },
      {
        name: 'Green Day',
        price: 70,
        volume: 0.04
      },
      {
        name: 'Zubrovka',
        price: 45,
        volume: 0.04
      }
    ];

    this.french = [
      {
        name: 'kruasan',
        price: 50,
        volume: 0.04
      },
      {
        name: 'Fondu',
        price: 70,
        volume: 0.04
      },
      {
        name: 'Улитки',
        price: 45,
        volume: 0.04
      }
    ];
    this.japan = [
      {
        name: 'Рол Калифорния',
        price: 50,
        volume: 0.04
      },
      {
        name: 'Рис',
        price: 70,
        volume: 0.04
      },
      {
        name: 'Красная рыба',
        price: 45,
        volume: 0.04
      }
    ];
    this.launch = [
      {
        name: 'Салат',
        price: 50,
        volume: 0.04
      },
      {
        name: 'Жаренные яйца',
        price: 70,
        volume: 0.04
      },
      {
        name: 'Блинчики',
        price: 45,
        volume: 0.04
      }
    ];

  }


  addToTotalScore(item) {
    this.totalScore.push(item);
      this.table['order'] = this.totalScore;
  }

  getResultPrice() {
    return this.totalScore.reduce((prev, el) => {
      return prev + el['price'];
    }, 0);
  }

  deleteItem(value) {
    console.log('delete Value',value);
    let idx = this.totalScore.indexOf(value);
    if (idx != -1) {
      return this.totalScore.splice(idx, 1);
    }
    return false;
  }

  addItem(item: string) {
    if (item === 'whiskeyModel') {
      this.showArray.splice(0, this.showArray.length);
      for (let i = 0; i < this.whiskeys.length; i++) {
        this.showArray.push(this.whiskeys[i]);
      }
    } else if (item === 'romsModel') {
      this.showArray.splice(0, this.showArray.length);
      for (let i = 0; i < this.roms.length; i++) {
        this.showArray.push(this.roms[i]);
      }
    } else if (item === 'vodkaModel') {
      this.showArray.splice(0, this.showArray.length);
      for (let i = 0; i < this.vodkas.length; i++) {
        this.showArray.push(this.vodkas[i]);
      }
    } else if (item === 'japanModel') {
      this.showArray.splice(0, this.showArray.length);
      for (let i = 0; i < this.japan.length; i++) {
        this.showArray.push(this.japan[i]);
      }
    } else if (item === 'frenchModel') {
      this.showArray.splice(0, this.showArray.length);
      for (let i = 0; i < this.french.length; i++) {
        this.showArray.push(this.french[i]);
      }
    } else if (item === 'launchModel') {
      this.showArray.splice(0, this.showArray.length);
      for (let i = 0; i < this.launch.length; i++) {
        this.showArray.push(this.launch[i]);
      }
    }
  }

  test(){
    if((this.showHookah === false) && (this.showBar === false) &&  (this.showKitchen === false)){
      this.showArray.length = 0;
    }
  }
}
