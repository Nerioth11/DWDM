import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PopularPage } from '../popular/popular';
import { DetailsPage } from '../details/details';
import { CholloFacade } from '../../facades/CholloFacade';
import { Usuario } from '../../entities/Usuario';
import { USUARIOS } from '../../db/db';
import { UsuarioFacade } from '../../facades/UsuarioFacade';
import { Chollo } from '../../entities/Chollo';

@Component({
  selector: 'page-myProfile',
  templateUrl: 'myProfile.html'
})
export class myProfilePage {

  usuario: Usuario;
  galleryType:String ='regular';
  chollos: Chollo[];
  favoritos: Chollo[];

  constructor(public navCtrl: NavController,
              private cholloFacade: CholloFacade,
              private usuarioFacade: UsuarioFacade) {
    this.usuario = USUARIOS[0];
  }

  ionViewWillEnter() {
    this.chollos = this.cholloFacade.findByUser(this.usuario);
    this.favoritos = this.cholloFacade.findFavouritesByUser(this.usuario);
  }

  goToPopular(params){
    if (!params) params = {};
    this.navCtrl.push(PopularPage);

  }

  goToDetails(idChollo){
    this.navCtrl.push(DetailsPage, {idChollo: idChollo});
  }
}
