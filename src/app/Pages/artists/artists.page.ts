import { Component, OnInit } from '@angular/core';
import { ArtistService } from 'src/app/services/artist.service';
import { Artist } from 'src/app/interfaces/artist';
import { ActivatedRoute } from '@angular/router';
import { PerfilArtistaPage } from '../perfil-artista/perfil-artista.page';


@Component({
  selector: 'app-artists',
  templateUrl: './artists.page.html',
  styleUrls: ['./artists.page.scss'],
})
export class ArtistsPage implements OnInit {
  list: Array<Artist> = [];
  constructor(private artistService: ArtistService, private ruta: ActivatedRoute) { }

  ngOnInit() {
    this.getArtists();
  }

  getArtists() {
    this.artistService.getArtists().subscribe(data => {
      this.list = data;
      console.log(data);
    });
  }
  obtenerArtista(id: any){
    console.log(id);
    this.artistService.getArtistById(id).subscribe(data =>{
    });
  }
}
