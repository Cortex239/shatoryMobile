import { Component, OnInit } from '@angular/core';
import { ArtistService } from 'src/app/services/artist.service';
import { Artist } from 'src/app/interfaces/artist';
import { ActivatedRoute  } from '@angular/router';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-perfil-artista',
  templateUrl: './perfil-artista.page.html',
  styleUrls: ['./perfil-artista.page.scss'],
})
export class PerfilArtistaPage implements OnInit {

  list: Array<Artist> = [];
  artist: any;
  data: any;
  vld: boolean;
  //artistService:ArtistService;
  constructor(private artistService: ArtistService, private activatedRouter: ActivatedRoute) {
    this.data =this.activatedRouter.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.obtenerArtista(this.data);
    this.obtenerToken();
  }

  obtenerArtista(id: any){
    console.log(id);
    this.artistService.getArtistById(id).subscribe(data =>{
      this.artist = data;
      console.log(this.artist);
    });
  };
  obtenerToken(){
    Preferences.get({key: 'token'});
    if(Preferences.get({key: 'token'})){
      this.vld = true;
      return;
    }
    this.vld = false;
    return;
  }
}
