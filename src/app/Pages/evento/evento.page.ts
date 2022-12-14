import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Evento } from 'src/app/interfaces/evento';
import { EventoService } from 'src/app/services/evento/evento.service';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.page.html',
  styleUrls: ['./evento.page.scss'],
})
export class EventoPage implements OnInit {
  data: any;
  list: Array<Evento> = [];
  evento: any;
  constructor(private activatedRouter: ActivatedRoute, private eventoService: EventoService, private router: Router) {
    this.data = this.activatedRouter.snapshot.paramMap.get('id');
   }

  ngOnInit(){
    this.obternerEvento(this.data);
  }
  obternerEvento(id: any){
    this.eventoService.getEventsById(id).subscribe(data => {
      this.list[0] = data;
      console.log(data);
    });
  }
  obtenerArtista(id: any){
    this.router.navigate(['perfil-artista/'+JSON.stringify(id)]);
  }
  obtenerLocal(id: any){
    this.router.navigate(['perfil-local/' + JSON.stringify(id)]);
  }
}
