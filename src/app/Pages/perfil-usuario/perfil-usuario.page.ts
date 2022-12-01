import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { Artist } from 'src/app/interfaces/artist';
import { FavoriteService } from 'src/app/services/favorite.service';
import { UsuarioService } from 'src/app/services/usuarios/usuario.service';
import { User } from 'src/app/interfaces/user';
import { ArtistService } from 'src/app/services/artist.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.page.html',
  styleUrls: ['./perfil-usuario.page.scss'],
})
export class PerfilUsuarioPage implements OnInit {

  user: User;
  list: Array<Artist> = [];

  constructor(private storageService: StorageService,
    private favoriteService: FavoriteService,
     private usuarioService: UsuarioService,
     private artistService: ArtistService) { }

  ngOnInit() {
     this.getFavoriteArtists();
  }

  obtenerArtista(id: any){
    console.log(id);
    this.artistService.getArtistById(id).subscribe(data =>{
      console.log(data);
    });
    //this.router.navigate(['perfil-artista/'+JSON.stringify(id)]);
  }

  async getFavoriteArtists() {
    const token = await this.storageService.get('token');
    this.usuarioService.obtenerUsuario(token.token).subscribe((data) => {
      this.user = data;
      this.favoriteService.getFavorites(this.user[0].rut).subscribe((datau) => {
        this.list = datau;
      });
    });
  }

  async logout() {
    await this.storageService.remove('token');
    window.location.href = '/';
  }
}
