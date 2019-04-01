import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { CidadeProvider } from '../../providers/cidade';
import { BairroProvider } from '../../providers/bairro';

/**
 * Generated class for the DadosEntregaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dados-entrega',
  templateUrl: 'dados-entrega.html',
})
export class DadosEntregaPage {

  public listaCidades = [];
  public listaBairros = [];
  private todo : FormGroup;

  constructor(private formBuilder: FormBuilder, public navCtrl: NavController, public navParams: NavParams, private cidade : CidadeProvider, private bairro : BairroProvider) {
    this.todo = this.formBuilder.group({
      cidade: ['', Validators.required],
      bairro: ['', Validators.required],
      rua: ['', Validators.required],
      numero: ['', Validators.required],
      complemento: [''],
      referencia: [''],
    });
  }

  ionViewDidLoad() {
    this.cidade.cidades().subscribe(
      (data : any) => {
        this.listaCidades = data;
      },
      (error : any) => {
        console.log(error);
      }
    )
  }

  public buscarBairro(codCidade) {
    this.bairro.bairros(codCidade).subscribe(
      (data : any) => {
        this.listaBairros = data;
      },
      (error : any) => {
        console.log(error);
      }
    )
  }

  public resetarCampos() {
    this.todo.reset();
  }
}
