import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Local } from '../../interfaces/local';

@Injectable({
  providedIn: 'root'
})
export class LocaService {

  constructor(private http: HttpClient) { }
  getLocals(){
    return this.http.get<Local[]>(`https://shatory-backend.herokuapp.com/local`);
  }

  getLocalsByName(idLocal: number) {
    return this.http.get<Local>(`https://shatory-backend.herokuapp.com/local/${idLocal}`);
  }
}
