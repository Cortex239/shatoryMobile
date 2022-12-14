import { Component, OnInit } from '@angular/core';
import { ArtistService } from 'src/app/services/artist.service';
import { Artist } from 'src/app/interfaces/artist';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuarios/usuario.service';
import { StorageService } from 'src/app/services/storage.service';
import { FavoriteService } from 'src/app/services/favorite.service';
import { User } from 'src/app/interfaces/user';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-perfil-artista',
  templateUrl: './perfil-artista.page.html',
  styleUrls: ['./perfil-artista.page.scss'],
})
export class PerfilArtistaPage implements OnInit {

  list: Array<Artist> = [];
  artist: any;
  data: any;
  favorite: boolean;
  user: User;

  constructor(private artistService: ArtistService,
    private activatedRouter: ActivatedRoute,
    private storageService: StorageService,
    private usuarioService: UsuarioService,
    private favoriteService: FavoriteService,
    private alertController: AlertController) {

    this.data = this.activatedRouter.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.obtenerArtista(this.data);
    // this.checkFavorite(this.data);
  }

  obtenerArtista(id: any) {
    this.artistService.getArtistById(id).subscribe(data => {
      this.artist = data;
      console.log(this.artist);
    });
  };

  async checkLogin() {

    const token = await this.storageService.get('token');

    if (token) {
      this.usuarioService.obtenerUsuario(token.token).subscribe(data => {
        this.user = data;
        this.addFavorite(this.user[0].rut, this.data);
      });
      return true;
    }
    else{
      this.presentAlert();
      return false;
    }
  }

  addFavorite(rut: string, idArtist: number){

    const favoriteData = {
      rutUser: rut,
      // eslint-disable-next-line object-shorthand
      idArtist: idArtist,
    };

    this.favoriteService.addFAvorite(JSON.stringify(favoriteData)).subscribe();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'Mensaje importante',
      message: 'Debes iniciar sesion para agregar a favoritos',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async checkFavorite(idArtist: number){
    const token = await this.storageService.get('token');
    if (token) {
      this.usuarioService.obtenerUsuario(token.token).subscribe(data => {
        this.user = data;
        this.favoriteService.checkFavorite(this.user[0].rut, idArtist).subscribe(data2 => {
          if(data2){
            this.favorite = true;
          }
          else{
            this.favorite = false;
          }
        });
      });
    }
  }

  async dltFavorite(idArtist: number){
    const token = await this.storageService.get('token');

    if (token) {
      this.usuarioService.obtenerUsuario(token.token).subscribe(data => {
        this.user = data;
        this.favoriteService.deleteFavorite(this.user[0].rut, idArtist).subscribe();
      });
    }
  }
}
