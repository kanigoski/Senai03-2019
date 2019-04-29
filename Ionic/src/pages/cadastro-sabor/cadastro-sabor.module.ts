import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroSaborPage } from './cadastro-sabor';

@NgModule({
  declarations: [
    CadastroSaborPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroSaborPage),
  ],
})
export class CadastroSaborPageModule {}
