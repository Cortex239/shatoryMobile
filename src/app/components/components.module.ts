import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { CreateArtistComponent } from './create-artist/create-artist.component';
import { CreateLocalComponent } from './create-local/create-local.component';
import { FormsModule } from '@angular/forms';
import { CreateEventComponent } from './create-event/create-event.component';
import { EditArtistComponent } from './edit-artist/edit-artist.component';

@NgModule({
    declarations: [FooterComponent,CreateArtistComponent,CreateLocalComponent,CreateEventComponent, EditArtistComponent],
    exports: [FooterComponent,CreateArtistComponent,CreateLocalComponent,CreateEventComponent, EditArtistComponent],
    imports: [IonicModule,CommonModule,RouterModule,FormsModule],
})

export class ComponentsModule { }
