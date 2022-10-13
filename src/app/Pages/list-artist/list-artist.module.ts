import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListArtistPageRoutingModule } from './list-artist-routing.module';

import { ListArtistPage } from './list-artist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListArtistPageRoutingModule
  ],
  declarations: [ListArtistPage]
})
export class ListArtistPageModule {}
