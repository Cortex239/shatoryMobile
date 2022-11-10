import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilLocalPageRoutingModule } from './perfil-local-routing.module';

import { PerfilLocalPage } from './perfil-local.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilLocalPageRoutingModule
  ],
  declarations: [PerfilLocalPage]
})
export class PerfilLocalPageModule {}
