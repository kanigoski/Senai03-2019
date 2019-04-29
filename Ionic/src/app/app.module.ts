import { SaboresProvider } from './../providers/sabores';
import { TamanhosProvider } from './../providers/tamanhos';

import { HttpProvider } from './../providers/http';
import { LoginProvider } from './../providers/login';
import { HttpModule } from '@angular/http';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from './../pages/login/login';
import { TamanhosPage } from './../pages/tamanhos/tamanhos';
import {DadosEntregaPage} from '../pages/dados-entrega/dados-entrega';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Messages} from '../providers/messages';
import {Toasted} from '../providers/toast';
import {CidadeProvider} from '../providers/cidade';
import {BairroProvider} from '../providers/bairro';
import { CadastroSaborPage } from '../pages/cadastro-sabor/cadastro-sabor';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    TamanhosPage,
    DadosEntregaPage,
    CadastroSaborPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    TamanhosPage,
    DadosEntregaPage,
    CadastroSaborPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Messages,
    Toasted,
    LoginProvider,
    HttpProvider,
    TamanhosProvider,
    SaboresProvider,
    CidadeProvider,
    BairroProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
