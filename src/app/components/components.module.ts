import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [FooterComponent],
    exports: [FooterComponent],
    imports: [IonicModule,CommonModule,RouterModule],
})

export class ComponentsModule { }
