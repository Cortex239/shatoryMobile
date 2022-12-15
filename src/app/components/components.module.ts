import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { CreateArtistComponent } from './create-artist/create-artist.component';
import { CreateLocalComponent } from './create-local/create-local.component';
import { FormsModule } from '@angular/forms';
import { CreateEventComponent } from './create-event/create-event.component';

@NgModule({
    declarations: [FooterComponent,CreateArtistComponent,CreateLocalComponent,CreateEventComponent],
    exports: [FooterComponent,CreateArtistComponent,CreateLocalComponent,CreateEventComponent],
    imports: [IonicModule,CommonModule,RouterModule,FormsModule],
})

export class ComponentsModule { }
