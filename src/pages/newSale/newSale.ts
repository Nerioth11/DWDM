import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'page-newSale',
  templateUrl: 'newSale.html'
})
export class newSalePage {

  constructor(public navCtrl: NavController) {
  }
  
  goToNewSale(params){
    if (!params) params = {};
    this.navCtrl.push(newSalePage);
  }
  
  goToDetails(params){
    if (!params) params = {};
    this.navCtrl.push(DetailsPage);
  }
}
