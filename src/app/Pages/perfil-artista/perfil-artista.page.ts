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
  isLoged: boolean;
  isAdmin: boolean;
  router: any;

  constructor(private artistService: ArtistService,
    private activatedRouter: ActivatedRoute,
    private storageService: StorageService,
    private usuarioService: UsuarioService,
    private favoriteService: FavoriteService,
    private alertController: AlertController) {

    this.data = this.activatedRouter.snapshot.paramMap.get('id');
  };

  ngOnInit() {
    this.isLoged = false;
    this.checkLogin();
    this.obtenerArtista(this.data);
    this.checkFavorite(this.data);
  };

  obtenerArtista(id: any) {
    this.artistService.getArtistById(id).subscribe(data => {
      this.artist = data;
    });
  };

  async checkLogin() {

    const token = await this.storageService.get('token');

    if (token) {
      this.usuarioService.obtenerUsuario(token.token).subscribe(data => {
        this.user = data;
        if(this.user[0].rol === 1){
          this.isAdmin = true;
        }
        else{
          this.isAdmin = false;
        }
        this.isLoged = true;
      });
    }
    else{
      this.isLoged = false;
    }
  };

  async addFavorite(rut: string, idArtist: number){

    const favoriteData = {
      rutUser: rut,
      // eslint-disable-next-line object-shorthand
      idArtist: idArtist,
    };

    this.favoriteService.addFAvorite(JSON.stringify(favoriteData)).subscribe();
  };

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'Mensaje importante',
      message: 'Debes iniciar sesion para agregar a favoritos',
      buttons: ['OK'],
    });

    await alert.present();
  };

  async checkFavorite(idArtist: number){
    const token = await this.storageService.get('token');
    if (token) {
      this.usuarioService.obtenerUsuario(token.token).subscribe(data => {
        this.user = data;
        this.favoriteService.checkFavorite(this.user[0].rut, idArtist).subscribe(data2 => {
          if(data2){
            this.favorite = true;
            document.getElementById('heart').style.color = 'red';
          }
          else{
            this.favorite = false;
            document.getElementById('heart').style.color = 'white';
          }
        });
      });
    }
  };

  async dltFavorite(idArtist: number){
    const token = await this.storageService.get('token');

    if (token) {
      this.usuarioService.obtenerUsuario(token.token).subscribe(data => {
        this.user = data;
        this.favoriteService.deleteFavorite(this.user[0].rut, idArtist).subscribe( data2 => {
        
        });
      });
    }
  };

  async changesHeart(){
    if(!this.favorite){
      document.getElementById('heart').style.color = 'red';
      await this.addFavorite(this.user[0].rut, this.data);
      this.favorite = true;
    }
    else{
      document.getElementById('heart').style.color = 'white';
      await this.dltFavorite(this.data);
      this.favorite = false;
    }
  };
  eliminarArtista(id: number){
    this.artistService.deleteArtist(id).subscribe(data => {
      
      window.location.href='artists';
    });
  };

  editarArtista(){

  };

  isLogedReturn(){
    return this.isLoged;
  };
  isAdminReturn(){
    return this.isAdmin;
  };
  isEditArtist(){
    if(this.data === '4'){
      return true;
    }
    else{
      return false;
    }
  }
}
