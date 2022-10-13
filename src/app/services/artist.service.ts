import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Artist } from 'backend/models/artist';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(private http:HttpClient) { }

//   createTicket(artist:Artist) {
//     return this.http.post(`${environment.API_URL}artists`, artist);
//   }

  getArtists() {
    return this.http.get<Artist[]>(`${environment.API_URL}artists`);
  }

  getArtistByName(artistName:string) {
    return this.http.get<Artist>(`${environment.API_URL}artists/${artistName}`);
  }


}