import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule} from "@angular/http";
import { LoadingService } from '../providers/loading-service/loading-service';
import {TablesPage} from "../pages/tables/tables";
import {ComponentsModule} from "../components/components.module";
import {EditTablePage} from "../pages/edit-table/edit-table";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TablesPage,
    EditTablePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TablesPage,
    EditTablePage
  ],
  providers: [
    LoadingService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
