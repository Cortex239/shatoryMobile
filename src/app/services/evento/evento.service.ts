import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Evento } from  '../../interfaces/evento'

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  constructor(private http: HttpClient) { }
  getEvents(){
    return this.http.get<Evento[]>(`https://shatory-backend.herokuapp.com/eventos/getAllEvento`);
  };
  getEventsById(idEvento: number){
    return this.http.get<Evento[]>(`https://shatory-backend.herokuapp.com/eventos/getEvento/:${idEvento}`);
  };
}
