import { Component, OnInit } from '@angular/core';
import { LocaService } from 'src/app/services/local/loca.service';
import { Local } from 'src/app/interfaces/local';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perfil-local',
  templateUrl: './perfil-local.page.html',
  styleUrls: ['./perfil-local.page.scss'],
})
export class PerfilLocalPage implements OnInit {

  list: Array<Local> = [];
  data: any;
  localForm: any;
  constructor(private activatedRouter: ActivatedRoute, private localesService: LocaService) {
    this.data = this.activatedRouter.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.obtenerArtista(this.data);
  }

  obtenerArtista(id: any) {
    this.localesService.getLocalsByName(id).subscribe(data => {
      this.list[0] = data;
    });
  }
}
