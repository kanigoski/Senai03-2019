import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Toasted } from '../../providers/toast';
import { TamanhosProvider } from '../../providers/tamanhos';

/**
 * Generated class for the CadastroSaborPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-sabor',
  templateUrl: 'cadastro-sabor.html',
})
export class CadastroSaborPage {

  public listaTamanho = [];

  tamanhoPizza: number;
  descricao: string;
  preco: number;

  private todo : FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, private tamanho: TamanhosProvider, private toast : Toasted) {
    this.todo = this.formBuilder.group({
      tamanho: ['', Validators.required],
      descricao: ['', Validators.required],
      preco: ['', Validators.required],
    });
  }

  cadastrarSabor() {
    console.log('tamanho', this.tamanhoPizza);
    this.tamanho.cadastrarSabor(this.tamanhoPizza, this.descricao, this.preco).subscribe(
      (data : any) => {
        this.toast.presentToast(`Sabor ${this.descricao} criado com sucesso!`);
        this.resetarCampos();
      })
  }

  carregarTamanho() {
    this.tamanho.carregarTamanho().subscribe(
      (data : any) => {
        console.log(data);
        this.listaTamanho = data;
      }
    )
  }

  public resetarCampos() {
    this.todo.reset();
  }

  ionViewDidLoad() {
    this.carregarTamanho();
  }

}
