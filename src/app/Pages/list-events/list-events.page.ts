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
  fechasEv: Array<Date> = [];


  constructor(private eventoService: EventoService, private router: Router,private artistService: ArtistService) { }

  ngOnInit() {
    this.getEvent();
  }
  getEvent(){
    this.eventoService.getEvents().subscribe(data =>{
      this.list = data;
      this.changesDate();
    });
  }
  obtenerArtista(id: any){
    this.artistService.getArtistById(id).subscribe();
    this.router.navigate(['perfil-artista/'+JSON.stringify(id)]);
  }
  obtenerLocal(id: any){
    this.router.navigate(['perfil-local/' + JSON.stringify(id)]);
  }
  obtenerEvento(id: any){
    this.router.navigate(['evento/' + JSON.stringify(id)]);
  }
  changesDate(){
    let i;
    for( i =0; i < this.list.length ; i++){
      const date = new Date(this.list[i].fecha);
      this.fechasEv.push(date);
      const day = date.getDate();
      const month = date.getMonth()+1;
      const year = date.getFullYear();
      this.list[i].fecha = day + '/' + month + '/' + year;
    }
    this.verificarEventos();
  }
  verificarEventos(){

    const hoy = new Date();
    let i;
    for (i = 0 ; i < this.fechasEv.length ; i++){
      const fechaEvento = new Date(this.fechasEv[i]);
      console.log(fechaEvento);
      if (fechaEvento < hoy){
        this.eventoService.deleteEvent(this.list[i].idEvento).subscribe(data => {
          console.log(data);
        });
      }
    }
  }
}
