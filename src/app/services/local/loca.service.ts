import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Local } from 'backend/models/local';

@Injectable({
  providedIn: 'root'
})
export class LocaService {

  constructor(private http: HttpClient) { }
  getLocals(){
    return this.http.get<Local[]>(`https://shatory-backend.herokuapp.com/local`);
  }

  getLocalsByName(artistName: string) {
    return this.http.get<Local>(`${environment.API_URL}artists/${artistName}`);
  }
}
