import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PopularPage } from '../popular/popular';
import { DetailsPage } from '../details/details';
import { CholloFacade } from '../../facades/CholloFacade';
import { Usuario } from '../../entities/Usuario';
import { USUARIOS } from '../../db/db';
import { UsuarioFacade } from '../../facades/UsuarioFacade';

@Component({
  selector: 'page-myProfile',
  templateUrl: 'myProfile.html'
})
export class myProfilePage {

  usuario: Usuario;
  galleryType:String ='regular';

  constructor(public navCtrl: NavController,
              private cholloFacade: CholloFacade,
              private usuarioFacade: UsuarioFacade) {
    this.usuario = USUARIOS[0];
  }

  goTopopular(params){
    if (!params) params = {};
    this.navCtrl.push(PopularPage);

  }
  
  goToDetails(params){
    if (!params) params = {};
    this.navCtrl.push(DetailsPage);
  }
}
