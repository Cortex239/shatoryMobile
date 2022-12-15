import { Component, OnInit } from '@angular/core';
import { EventoService } from 'src/app/services/evento/evento.service';
import { alertController } from '@ionic/core';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Evento } from 'src/app/interfaces/evento';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss'],
})
export class CreateEventComponent implements OnInit {

  date?: string;
  idEvento?: number;
  nombreEvento: string;
  precio: number;
  fecha?: string;
  imagenEvento: string;
  idLoc: number;
  idArt: number;

  constructor(private alertController: AlertController, private eventService: EventoService, private activatedRouter: ActivatedRoute) { }

  ngOnInit() {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'Mensaje importante',
      message: 'Evento creado correctamente',
      buttons: ['OK'],
    });

    await alert.present();
  }
  
  enviarEvento(){
    
    const nuevoEvento : Evento = {
      nombreEvento : this.nombreEvento,
      precio : this.precio,
      fecha: this.fecha,
      idLoc : this.idLoc,
      idArt : this.idArt,
      imagenEvento : this.imagenEvento
    };

    const eventoJSON = JSON.stringify(nuevoEvento);

    this.eventService.createEvent(eventoJSON).subscribe(data =>{
      this.presentAlert();
      window.location.href = "/list-events";
    });
  }
}
