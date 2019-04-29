import { Injectable } from '@angular/core';
import { HttpProvider } from './http';


/*
  Generated class for the LoginProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TamanhosProvider {

  constructor( public httpProvider : HttpProvider) {
  }
  public cadastrarSabor(id_tamanho: number, descricao: string, preco: number) {
    let obj = {
      id_tamanho: id_tamanho,
      descricao: descricao,
      preco: preco,
    }

    this.httpProvider.url = 'http://localhost:3000/sabor';
    return this.httpProvider.put(obj);
  }

  public carregarTamanho() {
    this.httpProvider.url = 'http://localhost:3000/tamanho';
    return this.httpProvider.get();
  }

  public carregarSaborById(id) {
    this.httpProvider.url = `http://localhost:3000/sabor/${id}`;
    return this.httpProvider.get();
  }
}
