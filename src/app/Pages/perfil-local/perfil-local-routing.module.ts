import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilLocalPage } from './perfil-local.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilLocalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilLocalPageRoutingModule {}
