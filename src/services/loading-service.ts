import { Injectable } from '@angular/core';
import { Loading, LoadingController } from "ionic-angular";

@Injectable()
export class LoadingService {

  loading: Loading;

  constructor(private loadingCtrl:LoadingController) {}

  closeLoading() {
    this.loading.dismiss();
  }

  showLoading() {
    this.loading = this.loadingCtrl.create();
    this.loading.present();
  }
}
