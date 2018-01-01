import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailsPage } from '../details/details';
import { CholloFacade } from '../../facades/CholloFacade';
import { Chollo } from '../../entities/Chollo';
import { ReaccionFacade } from '../../facades/ReaccionFacade';
import { Reaccion } from '../../entities/Reaccion';
import { Usuario } from '../../entities/Usuario';
import { USUARIOS } from '../../db/db';
import { newSalePage } from '../newSale/newSale';

@Component({
  selector: 'page-Home',
  templateUrl: 'Home.html'
})
export class HomePage {

  chollos:Chollo[];

  constructor(public navCtrl: NavController,
              private cholloFacade: CholloFacade,
              private reaccionFacade: ReaccionFacade
             ) {
    this.getChollos();
  }

  goToDetails(idChollo){
    this.navCtrl.push(DetailsPage, {idChollo: idChollo});
  }

  goToNewSale(){
    this.navCtrl.push(newSalePage); 
  }

  getChollos(){
    this.chollos = this.cholloFacade.findAll();
  }

  addLikeTo(cholloId:String){
    var chollo = (this.cholloFacade.find(Number(cholloId)));
    var reaccion = new Reaccion(chollo, USUARIOS[0], true);
    if(this.reaccionFacade.find(reaccion) != null && this.reaccionFacade.find(reaccion).getPositiva()) return;
    this.reaccionFacade.remove(reaccion);
    this.reaccionFacade.create(reaccion);
  }

  addDislikeTo(cholloId:String){
    var chollo = (this.cholloFacade.find(Number(cholloId)));
    var reaccion = new Reaccion(chollo, USUARIOS[0], false);
    if(this.reaccionFacade.find(reaccion) != null && !this.reaccionFacade.find(reaccion).getPositiva()) return;
    this.reaccionFacade.remove(reaccion);
    this.reaccionFacade.create(reaccion);
  }

}
