import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Local } from 'src/app/interfaces/local';
import { LocaService } from 'src/app/services/local/loca.service';

@Component({
  selector: 'app-create-local',
  templateUrl: './create-local.component.html',
  styleUrls: ['./create-local.component.scss'],
})
export class CreateLocalComponent implements OnInit {

  nombre: string;
  direccion: string;
  contacto: string;
  web?: string;
  facebook?: string;
  instagram?: string;
  twitter?: string;
  linkImagen: string;
  latitud : number;
  longitud : number;
  
  constructor(private alertController: AlertController,private localesService: LocaService) { }

  ngOnInit() {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'Mensaje importante',
      message: 'Local creado correctamente',
      buttons: ['OK'],
    });

    await alert.present();
  }
  enviarLocal(){
    const nuevoLocal : Local = {
      nombre : this.nombre,
      direccion : this.direccion,
      contacto : this.contacto,
      web : this.web,
      facebook : this.facebook,
      instagram : this.instagram,
      twitter : this.twitter,
      linkImagen : this.linkImagen,
      latitud : this.latitud,
      longitud : this.longitud
    };

    const localJSON = JSON.stringify(nuevoLocal);

    this.localesService.createLocal(localJSON).subscribe(data =>{
      this.presentAlert();
      window.location.href = "/local";
    });

  }
}
