import { Component, OnInit } from '@angular/core';
import { ArtistService } from 'src/app/services/artist.service';
import { Artist } from 'src/app/interfaces/artist';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.page.html',
  styleUrls: ['./main-menu.page.scss'],
})
export class MainMenuPage implements OnInit {

  list: Array<Artist> = [];

  constructor(private artistService: ArtistService) { }

  ngOnInit() {

    this.obtenerRandom();
  }

  obtenerRandom(){
    this.artistService.getRandomArtists().subscribe(data => {
      this.list = data;
    });
  }

}
