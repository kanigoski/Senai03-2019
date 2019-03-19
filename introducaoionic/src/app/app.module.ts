import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Messages } from '../providers/menssages';
import { Toast } from '../providers/toast';
import { Login } from '../providers/login';

import { PaginaRPage } from '../pages/pagina-r/pagina-r';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    PaginaRPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    PaginaRPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Messages,
    Toast,
    Login,

    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
