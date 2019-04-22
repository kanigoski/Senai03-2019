import { TamanhosPage } from './../tamanhos/tamanhos';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Toasted } from '../../providers/toast';
import { LoginProvider } from '../../providers/login';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user:string;
  senha:string;

  newUser:string;
  newPassword: string;
  name: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast : Toasted, private logon : LoginProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  openModalRegister() {

  }

  cadastrar() {
    this.logon.cadastrar(this.newUser, this.newPassword, this.name).subscribe(
      (data : any) => {
        if(data.response === 200) {
          this.toast.presentToast(`Usuário ${this.name} criado com sucesso!`);
        } else {
          console.log('Data', data.message)
          this.toast.presentToast(data.message);
        }
      }
    )
  }

  login(){
    this.logon.singIn(this.user, this.senha).subscribe(
      (data : any) => {
        if(data.response === 200) {
          this.toast.presentToast(`Usuário: ${data.userName} logado com sucesso!`);
        } else {
          this.toast.presentToast(data.message);
        }
      },
    )
  };
}
