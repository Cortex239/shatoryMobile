import { Component, OnInit } from '@angular/core';
import { ArtistService } from 'src/app/services/artist.service';
import { Artist } from 'src/app/interfaces/artist';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.page.html',
  styleUrls: ['./artists.page.scss'],
})
export class ArtistsPage implements OnInit {
  list:Array<Artist> = [];
  //artistService:ArtistService;
  constructor(private artistService:ArtistService) { }

  ngOnInit() {
    this.getArtists();
  }

  getArtists() {
    this.artistService.getArtists().subscribe(data => {
      this.list = data;
      console.log(data);
    });
  }
}
