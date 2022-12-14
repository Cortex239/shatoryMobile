import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Evento } from 'src/app/interfaces/evento';
import { EventoService } from 'src/app/services/evento/evento.service';
import { ArtistService } from 'src/app/services/artist.service';
import { LocaService } from 'src/app/services/local/loca.service';
import { Local } from 'protractor/built/driverProviders';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.page.html',
  styleUrls: ['./evento.page.scss'],
})
export class EventoPage implements OnInit {
  data: any;
  list: Array<Evento> = [];
  evento: any;
  hour: string;
  listLocales: Array<any> = [];
  artist: any;
  // eslint-disable-next-line max-len
  constructor(private activatedRouter: ActivatedRoute, private eventoService: EventoService, private router: Router, private localesService: LocaService , private artistService: ArtistService) {
    this.data = this.activatedRouter.snapshot.paramMap.get('id');
   }

  ngOnInit(){
    this.obternerEvento(this.data);
  }
  obternerEvento(id: any){
    this.eventoService.getEventsById(id).subscribe(data => {
      this.list[0] = data;
      this.changesDate();
      this.obtenerLocal(this.list[0].idLoc);
      this.obtenerArtista(this.list[0].idArt);
    });
  }
  enviarArtista(id: any){
    this.router.navigate(['perfil-artista/'+JSON.stringify(id)]);
  }
  enviarLocal(id: any){
    this.router.navigate(['perfil-local/' + JSON.stringify(id)]);
  }
  changesDate(){
    let i;
    for( i =0; i < this.list.length ; i++){
      const date = new Date(this.list[i].fecha);
      const day = date.getDate();
      const month = date.getMonth();
      const year = date.getFullYear();
      const hour = date.getHours();
      const minutes = date.getMinutes();
      // const seconds = date.getSeconds();

      this.list[i].fecha = day + '/' + month + '/' + year;
      if(minutes < 10){
        this.hour = hour+ ':0' + minutes;
      }
      else{
        this.hour = hour+ ':' + minutes;
      }
    }
  }
  obtenerLocal(id: any) {
    this.localesService.getLocalsByName(id).subscribe(data => {
      this.listLocales[0] = data;
      console.log(this.listLocales[0]);
    });
  }
  obtenerArtista(id: any) {
    this.artistService.getArtistById(id).subscribe(data => {
      this.artist = data;
      console.log(this.artist);
    });
  };
}
