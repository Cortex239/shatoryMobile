import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Artist } from 'backend/models/artist';


@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor(private http: HttpClient) { }

  addFAvorite(favorite: any) {
    return this.http.post(`https://shatory-backend.herokuapp.com/favorites/addFavorite`, favorite, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  getFavorites(rut: number) {
    return this.http.get<Artist[]>(`https://shatory-backend.herokuapp.com/favorites/getFavorites/${rut}`);
  }
}
