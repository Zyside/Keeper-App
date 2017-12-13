import { ActionSheetController } from 'ionic-angular';
import {Component} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {TablesPage} from "../tables/tables";
import {TablesComponent} from "../../components/tables-components/tables.components";
import {TotalModalPage} from "../total-modal/total-modal";
import {OrderService} from "../../services/order.service";


@Component({
  selector: 'page-edit-table',
  templateUrl: 'edit-table.html',
})
export class EditTablePage {

  table: object[];
  totalCount:number;
  showBar: boolean = false;
  showHookah:boolean = false;
  showKitchen:boolean = false;
  showArray: object[] = [];
  alcohol: any = {};
  alcoholKeys: string[] = [];
  kitchen:any = {};
  kitchenKeys:string[]=[];
  hookah:any={};
  hookahKeys:string[] = [];

  totalScore: object[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private orderService:OrderService) {
    this.table = this.navParams.get('item');
    this.kitchen = {
      'Японская' : [
        {
          name: 'Рол',
          price: 70,
          count: 0,
          sum: 0
        },
        {
          name: 'Мидии',
          price: 65,
          count: 0,
          sum: 0
        },
        {
          name: 'Красная рыба',
          price: 60,
          count: 0,
          sum: 0
        }
      ],
      'Франция': [
        {
          name: 'Круасан',
          price: 50,
          count: 0,
          sum: 0
        },
        {
          name: 'Улитки',
          price: 70,
          count: 0,
          sum: 0
        },
        {
          name: 'Фондю',
          price: 45,
          count: 0,
          sum: 0
        }
      ],
      'Америка': [
        {
          name: 'Стейк медиум',
          price: 50,
          count: 0,
          sum: 0
        },
        {
          name: 'Стейк куриный',
          price: 70,
          count: 0,
          sum: 0
        },
        {
          name: 'Стейк из говядины',
          price: 45,
          count: 0,
          sum: 0
        }
      ]
    };
    this.kitchenKeys = Object.keys(this.kitchen);

    this.alcohol = {
      'Виски' : [
        {
          name: 'Jack Daneils',
          price: 70,
          count: 0,
          sum: 0

        },
        {
          name: 'Jim Beam',
          price: 65,
          count: 0,
          sum: 0
        },
        {
          name: 'Jameson',
          price: 60,
          count: 0,
          sum: 0
        }
      ],
      'Ромы': [
        {
          name: 'Okharte',
          price: 50,
          count: 0,
          sum: 0
        },
        {
          name: 'Bacardi',
          price: 70,
          count: 0,
          sum: 0
        },
        {
          name: 'Capitan Morgan',
          price: 45,
          count: 0,
          sum: 0
        }
      ],
      'Водка': [
        {
          name: 'Finland',
          price: 50,
          count: 0,
          sum: 0
        },
        {
          name: 'Green Day',
          price: 70,
          count: 0,
          sum: 0
        },
        {
          name: 'Zubrovka',
          price: 45,
          count: 0,
          sum: 0
        }
      ]
    };
    this.alcoholKeys = Object.keys(this.alcohol);

    this.hookah = {

      'Классика':[
        {
        name:'Шербет',
        price:140,
          count: 0,
          sum: 0
        },
        {
          name:'Adalia',
          price:180,
          count: 0,
          sum: 0
        },
        {
          name:'Nahla',
          price:180,
          count: 0,
          sum: 0

        },
      ],
      'Премиум':[
        {
        name:'Fumari',
        price:200,
          count: 0,
          sum: 0
        },
        {
          name:'Танж',
          price:200,
          count: 0,
          sum: 0
        },
        {
          name:'DakrSide',
          price:200,
          count: 0,
          sum: 0
        }
      ]
    };
    this.hookahKeys = Object.keys(this.hookah);
  }


  addToTotalScore(linkItem) {
    console.log(linkItem);
    let item = JSON.parse(JSON.stringify(linkItem))
    let index = this.checkItem(item, this.totalScore);
    console.log(index)
    if  (index!==-1) {
      // this.totalScore[index]['count'] = this.totalCount;
      console.log(this.totalCount, 'xui');
      this.totalScore[index]['count'] += 1;``

      this.totalScore[index]['sum'] += item['price'];
    } else {
      this.totalScore.push(item);
    }
    console.log(this.orderService);
  }

    sendToTotalModal(){
      // console.log(this.totalScore);
      let table = Object.assign({}, this.table);
      let totalScore = Object.assign({}, this.totalScore)
      console.log(this.table, 'Table');
      table['time'] = new Date();
      table['sum'] = this.getResultPrice();
      table['order'] = totalScore;
      this.orderService.addData(table);
    }


  checkItem(item, array) {
    console.log('check item');
    for(let i=0; i<array.length; i++){
      console.log('length', array.length)
      console.log('i', i)
      if (array[i].name === item.name){
        return i
      }
    }
    return -1
  }

  // changeCount(linkItem){
  //   console.log(linkItem);
  //   let item = JSON.parse(JSON.stringify(linkItem))
  //   let index = this.checkItem(item, this.totalScore);
  //   console.log('item', item);
  //   console.log(index)
  //   if  (index!==-1) {
  //     this.totalScore[index]['count'] = this.totalCount;
  //     this.totalScore[index]['price']= ((this.totalScore[index]['price'] *10) * (this.totalScore[index]['count']*10))/10;
  //   }
  // }

  removeItem(item){
    console.log('delete Value',item);
    if((item['price'] != 0) && (item['count'] != 0) &&(item['price'] != 1) && (item['count'] != 1)){
      item['sum'] -= item['price'];
      item['count'] -= 1;
      // console.log('remove item', item);
      // console.log(this.totalScore);
    } else if (item['count'] <= 1){
      this.deleteItem(item);
      }
    }


  getResultPrice() {
    return this.totalScore.reduce((prev, el) => {
      return prev + el['sum'];
    }, 0);
  }

  deleteItem(value) {
    let idx = this.totalScore.indexOf(value);
    if (idx != -1) {
      return this.totalScore.splice(idx, 1);
    }
    return false;
  }

  addAlcohol(item: string) {
    this.showArray = this.alcohol[item];
  }

  addKitchen(item: string) {
    this.showArray = this.kitchen[item];
  }

  addHookah(item:string){
    this.showArray = this.hookah[item];
  }

  hideMenu(){
    if((this.showHookah === false) && (this.showBar === false) &&  (this.showKitchen === false)){
      this.showArray.length = 0;
    }
  }

  xui(item){
    console.log(this.totalScore[this.totalScore.indexOf(item)]['count']);
    item.sum = this.totalScore[this.totalScore.indexOf(item)]['price'] * item.count;
    console.log(this.totalScore);

  }
}

