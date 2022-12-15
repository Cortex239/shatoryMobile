import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Artist } from 'src/app/interfaces/artist';
import { ArtistService } from 'src/app/services/artist.service';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-artist',
  templateUrl: './edit-artist.component.html',
  styleUrls: ['./edit-artist.component.scss'],
})
export class EditArtistComponent implements OnInit {

  nombreArtista : string;
  descripcion : string;
  linkImagen : string;

  constructor(private artistServcie:ArtistService, private alertController: AlertController , private activatedRouter: ActivatedRoute) { }

  ngOnInit() {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'Mensaje importante',
      message: 'Aritsta editado correctamente',
      buttons: ['OK'],
    });

    await alert.present();
  }

  editarArtista(){
    const nuevoArtista : Artist = {
      nombreArtista : this.nombreArtista,
      descripcion : this.descripcion,
      linkImagen : this.linkImagen
    };

    const artistaJSON = JSON.stringify(nuevoArtista);

    this.artistServcie.editArtist(artistaJSON).subscribe(data =>{
      this.presentAlert()});
      window.location.href = "/artists";
  }
}
