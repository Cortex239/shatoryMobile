import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Artist } from 'backend/models/artist';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(private http:HttpClient) { }

  getArtists(){
    return this.http.get<Artist[]>(`http://localhost:3001/artists`);
  }

  getArtistByName(artistName:string) {
    return this.http.get<Artist>(`${environment.API_URL}artists/${artistName}`);
  }
}