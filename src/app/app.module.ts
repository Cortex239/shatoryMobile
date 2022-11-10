import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SwiperModule } from 'swiper/angular'
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [AppComponent,FooterComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, CustomFormsModule, SwiperModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],

})
export class AppModule {}
