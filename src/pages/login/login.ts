import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { DetailsPage } from '../details/details';
import { RegistroPage } from '../registro/registro';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  }goToDetails(params){
    if (!params) params = {};
    this.navCtrl.push(DetailsPage);
  }goToRegistro(params){
    if (!params) params = {};
    this.navCtrl.push(RegistroPage);
  }
}
