import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { Categoria } from '../entities/Categoria';
import { CategoriaFacade } from '../facades/CategoriaFacade';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { ViewChild } from '@angular/core';
import { CategoryService } from '../services/CategoryService';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('myNav')navCtrl: NavController;
  rootPage:any = TabsControllerPage;
  categorias:Categoria[];

  constructor(platform: Platform, 
              statusBar: StatusBar, 
              splashScreen: SplashScreen,
              private categoriaFacade: CategoriaFacade,
              private categoryService: CategoryService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      this.categorias = this.categoriaFacade.findAll();
    });
  }

  refresh(categoriaId){
    // this.navCtrl.push(this.navCtrl.getActive().component, {categoriaId: categoriaId});
    // this.navCtrl.setRoot(this.navCtrl.getActive().component, {categoriaId: categoriaId});
    this.categoryService.setCategoryId(categoriaId);
  }
  
}
