import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventoPageRoutingModule } from './evento-routing.module';

import { EventoPage } from './evento.page';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
    declarations: [EventoPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        EventoPageRoutingModule,
        ComponentsModule
    ]
})
export class EventoPageModule {}
