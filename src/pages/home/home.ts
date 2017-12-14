import { Component } from '@angular/core';
import { Http } from "@angular/http";
import { LoadingController, NavController } from 'ionic-angular';
import { LoadingService } from "../../services/loading-service";
import {TablesPage} from "../tables/tables";
import {OrderService} from "../../services/order.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

login:string ='';
password:any = '';
status:string = 'hookah';
  constructor(public navCtrl: NavController,
              public http:Http,
              public loading: LoadingController,
              private loadingService: LoadingService,
              private orderService:OrderService) {
    console.log(this.status);
    this.orderService.addStatus(this.status);
  }

  add(){
    let tempJson = {
      login:this.login,
      password:this.password
    };
    if ((this.login.trim() !== '' || this.password.trim() !== '') && (this.login.trim() !== '' && this.password.trim() !== '')){
      this.loadingService.showLoading();
      // this.http.post('http://192.168.31.35:3000/login', tempJson).subscribe(data=>{
        this.navCtrl.push(TablesPage, {status:this.status}
          // {userToken:data.json().token}
          );
      // });
      this.loadingService.closeLoading();
    } else {
      alert('Incorrect email or password');
    }
  }

  checkFieldValue(value) {
    this[value] = this[value].replace(/\s/gi, '');
  }
}
