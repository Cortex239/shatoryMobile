import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/interfaces/artist';
import { ArtistService } from 'src/app/services/artist.service';

@Component({
  selector: 'app-list-artist',
  templateUrl: './list-artist.page.html',
  styleUrls: ['./list-artist.page.scss'],
})
export class ListArtistPage implements OnInit {

  list:Array<Artist> = [];

  constructor(private artistService:ArtistService) { }

  ngOnInit() {
    this.getArtists();
  }

  getArtists() {
    this.artistService.getArtists().subscribe(data => {
      this.list = data;
    });
  }
}
