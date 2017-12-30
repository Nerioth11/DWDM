import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CholloFacade } from '../../facades/CholloFacade';
import { Chollo } from '../../entities/Chollo';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { UsuarioFacade } from '../../facades/UsuarioFacade';
import { newSalePage } from '../newSale/newSale';

@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class DetailsPage {

  chollo:Chollo;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private cholloFacade: CholloFacade,
              private usuarioFacade: UsuarioFacade) {
    this.chollo = this.cholloFacade.find(navParams.get("idChollo"));
  }

  goToNewSale(idChollo){
    this.navCtrl.push(newSalePage, {idChollo: idChollo});
  }
  
}
