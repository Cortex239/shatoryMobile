import { Component, OnInit } from '@angular/core';
import { EventoService } from 'src/app/services/evento/evento.service';
import {  Router } from '@angular/router';
import { Evento } from 'src/app/interfaces/evento';
import { ArtistService } from 'src/app/services/artist.service';

@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.page.html',
  styleUrls: ['./list-events.page.scss'],
})
export class ListEventsPage implements OnInit {
  list: Array<Evento> = [];

  constructor(private eventoService: EventoService, private router: Router,private artistService: ArtistService) { }

  ngOnInit() {
    this.getEvent();
  }
  getEvent(){
    this.eventoService.getEvents().subscribe(data =>{
      this.list = data;
    });
  }
  obtenerArtista(id: any){
    this.artistService.getArtistById(id).subscribe();
    this.router.navigate(['perfil-artista/'+JSON.stringify(id)]);
  }
  obtenerLocal(id: any){
    this.router.navigate(['perfil-local/' + JSON.stringify(id)]);
  }
}
