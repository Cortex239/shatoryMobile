import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Artist } from '../interfaces/artist';


@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor(private http: HttpClient) { }
  url = environment.API_URL;
  addFAvorite(favorite: any) {
    return this.http.post(`https://shatory-backend.herokuapp.com/favorites/addFavorite`, favorite, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  getFavorites(rut: string) {
    return this.http.get<Artist[]>(`https://shatory-backend.herokuapp.com/favorites/getFavorite/${rut}`);
  }

  checkFavorite(rut: string, idArtist: number) {
    return this.http.get(`https://shatory-backend.herokuapp.com/favorites/getFavorite/${rut}/${idArtist}`);
  }

  deleteFavorite(rut: string, idArtist: number) {
    console.log("a");
    
    return this.http.delete(`https://shatory-backend.herokuapp.com/favorites/deleteFavorite/${rut}/${idArtist}`);
  }
}
