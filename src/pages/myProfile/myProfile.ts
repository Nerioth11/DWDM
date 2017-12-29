import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PopularPage } from '../popular/popular';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'page-myProfile',
  templateUrl: 'myProfile.html'
})
export class myProfilePage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  galleryType ='regular';
  constructor(public navCtrl: NavController) {
  }
  goTopopular(params){
    if (!params) params = {};
    this.navCtrl.push(PopularPage);
  }goToDetails(params){
    if (!params) params = {};
    this.navCtrl.push(DetailsPage);
  }
}
