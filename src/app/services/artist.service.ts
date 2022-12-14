import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Artist } from '../interfaces/artist';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(private http: HttpClient) { }

  getArtists(){
    return this.http.get<Artist[]>(`https://shatory-backend.herokuapp.com/artists`);
  }

  getArtistById(idArtista: number) {
    return this.http.get<Artist>(`https://shatory-backend.herokuapp.com/artists/getArtistById/${idArtista}`);
  }

  getRandomArtists(){
    return this.http.get<Artist[]>(`https://shatory-backend.herokuapp.com/artists/getRandom`);
  }
  deleteArtist(id: number){
    return this.http.delete(`https://shatory-backend.herokuapp.com/artists/deleteArtistById/${id}`);
  }
}
