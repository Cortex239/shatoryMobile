import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListEventsPageRoutingModule } from './list-events-routing.module';

import { ListEventsPage } from './list-events.page';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
    declarations: [ListEventsPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ListEventsPageRoutingModule,
        ComponentsModule
    ]
})
export class ListEventsPageModule {}
