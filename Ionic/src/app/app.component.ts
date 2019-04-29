import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from './../pages/home/home';
import { ListPage } from './../pages/list/list';
import { LoginPage } from './../pages/login/login';
import { DadosEntregaPage } from './../pages/dados-entrega/dados-entrega';
import { CadastroSaborPage } from '../pages/cadastro-sabor/cadastro-sabor';
import { TamanhosPage } from '../pages/tamanhos/tamanhos';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {z
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'Login', component: LoginPage},
      { title: 'Dados Entrega', component: DadosEntregaPage },
      { title: 'Cadastrar Sabor', component: CadastroSaborPage },
      { title: 'Lista de Pizzas', component: TamanhosPage },
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
