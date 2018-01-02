import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailsPage } from '../details/details';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { Chollo } from '../../entities/Chollo';
import { CholloFacade } from '../../facades/CholloFacade';
import { EmpresaPatrocinada } from '../../entities/EmpresaPatrocinada';
import { EmpresaPatrocinadaFacade } from '../../facades/EmpresaPatrocinadaFacade';
import { UsuarioFacade } from '../../facades/UsuarioFacade';
import { Usuario } from '../../entities/Usuario';
import { USUARIOS } from '../../db/db';
import { HomePage } from '../home/home';
import { CategoriaFacade } from '../../facades/CategoriaFacade';
import { Categoria } from '../../entities/Categoria';
import { UserService } from '../../services/UserService';

@Component({
  selector: 'page-newSale',
  templateUrl: 'newSale.html'
})
export class newSalePage {
   
  idChollo:Number;
  chollo:Chollo;
  empresasPatrocinadas:EmpresaPatrocinada[];
  categorias:Categoria[];
  usuario:Usuario;
  empresaPatrocinadaActual:Number;
  categoriaActual:Number;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private cholloFacade: CholloFacade,
              private empresaPatrocinadaFacade: EmpresaPatrocinadaFacade,
              private categoriaFacade: CategoriaFacade,
              private usuarioFacade: UsuarioFacade,
              private userService: UserService) {

    this.idChollo =  navParams.get("idChollo");
    this.usuario = this.userService.getUser();
    this.loadCompanies();
    this.loadCategories();
    if(this.idChollo == undefined) return;
    this.loadSaveInfo();
    this.empresaPatrocinadaActual = this.usuario.getAdministrador()? this.chollo.getEmpresaPatrocinada().getId() : -1;
    this.categoriaActual = this.chollo.getCategoria().getId();
  }
  
  goToNewSale(params){
    if (!params) params = {};
    this.navCtrl.push(newSalePage);
  }
  
  goToDetails(params){
    if (!params) params = {};
    this.navCtrl.push(DetailsPage);
  }

  goToHome(){
    this.navCtrl.push(HomePage);
  }

  loadSaveInfo() {
    this.chollo = this.cholloFacade.find(this.idChollo);
  }

  loadCompanies() {
    this.empresasPatrocinadas = this.empresaPatrocinadaFacade.findAll();
  }

  loadCategories() {
    this.categorias = this.categoriaFacade.findAll();
  }

  deleteSave(){
    this.cholloFacade.remove(this.chollo);
    this.goToHome();
  }


  editSave(titulo:String, enlace:String, descripcion:String, precioAntes:Number, precioDespues:Number, empresaNoPatrocinada:String, empresaPatrocinada:Number, categoria:Number) {
    this.chollo.setTitulo(titulo);
    this.chollo.setEnlace(enlace);
    this.chollo.setDescripcion(descripcion);
    this.chollo.setPrecioAntes(precioAntes);
    this.chollo.setPrecioDespues(precioDespues);
    this.chollo.setFechaActualizacion(new Date());
    this.chollo.setEmpresaNoPatrocinada(empresaNoPatrocinada);
    this.chollo.setEmpresaPatrocinada(
      this.usuario.getAdministrador() ? this.empresaPatrocinadaFacade.find(empresaPatrocinada) : new EmpresaPatrocinada("-", -1)
    );
    this.chollo.setCategoria(this.categoriaFacade.find(categoria));
    this.cholloFacade.edit(this.chollo);
    this.goToHome();
  }
  createSave(titulo:String, enlace:String, descripcion:String, precioAntes:Number, precioDespues:Number, empresaNoPatrocinada:String, empresaPatrocinada:Number, categoria:Number) {
    var newSave = new Chollo
    (
      titulo,
      enlace, 
      descripcion, 
      precioAntes,
      precioDespues,
      new Date(),
      new Date(), 
      empresaNoPatrocinada, 
      this.usuario.getAdministrador() ? this.empresaPatrocinadaFacade.find(empresaPatrocinada) : new EmpresaPatrocinada("-", -1),
      this.usuario, 
      this.categoriaFacade.find(categoria), 
      Math.trunc((Math.random() * 1000) + 1)
    )
    this.cholloFacade.create(newSave);
    this.goToHome();
  }
}
