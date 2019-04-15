import { Injectable } from '@angular/core';
import { HttpProvider } from './http';


/*
  Generated class for the LoginProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BairroProvider {

  constructor( public httpProvider : HttpProvider) {
  }
  public bairros(codCidade){
    this.httpProvider.url = `http://localhost:3000/bairros/${codCidade}`;
    return this.httpProvider.get();
  }
}