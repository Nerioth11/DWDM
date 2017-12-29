import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'page-popular',
  templateUrl: 'popular.html'
})
export class PopularPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToDetails(params){
    if (!params) params = {};
    this.navCtrl.push(DetailsPage);
  }
}
