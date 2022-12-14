import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Evento } from 'src/app/interfaces/evento';
import { EventoService } from 'src/app/services/evento/evento.service';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.page.html',
  styleUrls: ['./evento.page.scss'],
})
export class EventoPage implements OnInit {
  data: any;
  evento: any;
  constructor(private activatedRouter: ActivatedRoute, private eventoService: EventoService) {
    this.data = this.activatedRouter.snapshot.paramMap.get('id');
   }

  ngOnInit() {
    this.obternerEvento(this.data);
  }
  obternerEvento(id: any){
    this.eventoService.getEventsById(id).subscribe(data => {
      this.evento = data;
    })
  }
}
