import { Component } from '@angular/core';
import { Http } from "@angular/http";
import { LoadingController, NavController } from 'ionic-angular';
import { LoadingService } from "../../providers/loading-service/loading-service";
import {TablesPage} from "../tables/tables";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

login:string ='';
password:any = '';

  constructor(public navCtrl: NavController,
              public http:Http,
              public loading: LoadingController,
              private loadingService: LoadingService) {

  }
  add(){
    let tempJson = {
      login:this.login,
      password:this.password
    };
    if ((this.login.trim() !== '' || this.password.trim() !== '') && (this.login.trim() !== '' && this.password.trim() !== '')){
      this.loadingService.showLoading();
      // this.http.post('http://192.168.31.35:3000/login', tempJson).subscribe(data=>{
        this.navCtrl.push(TablesPage,
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
