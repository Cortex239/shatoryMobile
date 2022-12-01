import { Component, OnInit } from '@angular/core';
import { LocaService } from 'src/app/services/local/loca.service';
import { Local } from 'src/app/interfaces/local';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-locales',
  templateUrl: './locales.page.html',
  styleUrls: ['./locales.page.scss'],
})
export class LocalesPage implements OnInit {

  list: Array<Local> = [];

  constructor(private localesService: LocaService, private router: Router, private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.getLocals();
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando...',
    });

    loading.present();
  };

  getLocals() {
    this.localesService.getLocals().subscribe(data => {
      this.list = data;
    });
  }

  obtenerLocal(id: any) {
    this.router.navigate(['perfil-local/' + JSON.stringify(id)]);
  }
}
