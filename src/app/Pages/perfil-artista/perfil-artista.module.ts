import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilArtistaPageRoutingModule } from './perfil-artista-routing.module';

import { PerfilArtistaPage } from './perfil-artista.page';

import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilArtistaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PerfilArtistaPage]
})
export class PerfilArtistaPageModule {}
