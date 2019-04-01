import { SaboresProvider } from './../../providers/sabores';
import { TamanhosProvider } from './../../providers/tamanhos';
import { SaboresPage } from '../sabores/sabores';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DadosEntregaPage } from '../dados-entrega/dados-entrega';

/**
 * Generated class for the TamanhosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tamanhos',
  templateUrl: 'tamanhos.html',
})
export class TamanhosPage {
  public listaTamanhos = [];
  public idTam = "";
  public listaSabores = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private tamanhos : TamanhosProvider,private sabores : SaboresProvider) {
  }

  ionViewDidLoad() {
    this.tamanhos.tamanhos().subscribe(
      (data : any) => {
        this.listaTamanhos = data;
      },
      (error : any) => {
        console.log(error);
      }
    )
  }

  obterSabores(item) {
    this.sabores.sabores(item.id).subscribe(
      (data : any) => {
        this.listaSabores = data;
  
      },
      (error : any) => {
        console.log(error);
      }
    )
  }

  dadosEntrega() {
    this.navCtrl.setRoot(DadosEntregaPage);
  }
}
