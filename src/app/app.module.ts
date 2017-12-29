import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PopularPage } from '../pages/popular/popular';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { DetailsPage } from '../pages/details/details';
import { newSalePage } from '../pages/newSale/newSale';
import { myProfilePage } from '../pages/myProfile/myProfile';
import { LoginPage } from '../pages/login/login';
import { RegistroPage } from '../pages/registro/registro';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PopularPage,
    TabsControllerPage,
    DetailsPage,
    newSalePage,
    myProfilePage,
    LoginPage,
    RegistroPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PopularPage,
    TabsControllerPage,
    DetailsPage,
    newSalePage,
    myProfilePage,
    LoginPage,
    RegistroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
