import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CholloFacade } from '../../facades/CholloFacade';
import { Chollo } from '../../entities/Chollo';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { UsuarioFacade } from '../../facades/UsuarioFacade';
import { newSalePage } from '../newSale/newSale';
import { Usuario } from '../../entities/Usuario';
import { USUARIOS } from '../../db/db';
import { FavoritoFacade } from '../../facades/FavoritoFacade';
import { Favorito } from '../../entities/Favorito';

@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class DetailsPage {
  
  chollo:Chollo;
  usuario:Usuario;
  favorito:Boolean;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private cholloFacade: CholloFacade,
              private usuarioFacade: UsuarioFacade,
              private favoritoFacade: FavoritoFacade) {
    this.chollo = this.cholloFacade.find(navParams.get("idChollo"));
    this.usuario = USUARIOS[0];
    this.favorito = this.getFavorito();
  }

  goToNewSale(idChollo){
    this.navCtrl.push(newSalePage, {idChollo: idChollo});
  }

  getFavorito() {
    // alert("FAVORITO: " + this.favoritoFacade.find(new Favorito(this.chollo, this.usuario)));
    return this.favoritoFacade.find(new Favorito(this.chollo, this.usuario)) != null;
  }

  addToFavourites(){
    this.favoritoFacade.create(new Favorito(this.chollo, this.usuario));
    this.favorito = true;
  }

  deleteFromFavourites(){
    this.favoritoFacade.remove(new Favorito(this.chollo, this.usuario));
    this.favorito = false;
  }
  
}
