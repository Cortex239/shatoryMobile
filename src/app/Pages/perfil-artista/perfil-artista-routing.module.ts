import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilArtistaPage } from './perfil-artista.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilArtistaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilArtistaPageRoutingModule {}
