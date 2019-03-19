import { Injectable } from '@angular/core';
import { ToastController  } from 'ionic-angular';


@Injectable()
export class Toast{

    constructor(private toastController : ToastController ){

    }
    public presentToast(toastMessage : string, duracao : number = 5000){
        const toast = this.toastController.create({
            message: toastMessage,
            duration: duracao
          })
          toast.present();

        //   outra forma de fazer
        //   this.toastController.create({
        //       message:toastMessage,
        //       duration:duracao
        //   }).present();
          
    }

   
    

}