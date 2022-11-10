import { Component, OnInit } from '@angular/core';
import { LocaService } from 'src/app/services/local/loca.service';
import { Local } from 'src/app/interfaces/local';
import { ActivatedRoute  } from '@angular/router';
import { JSON } from 'sequelize';

@Component({
  selector: 'app-perfil-local',
  templateUrl: './perfil-local.page.html',
  styleUrls: ['./perfil-local.page.scss'],
})
export class PerfilLocalPage implements OnInit {
  data: any;
  local: any;

  constructor(private activatedRouter: ActivatedRoute, private localesService: LocaService) {
    this.data =this.activatedRouter.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.obtenerLocal(this.data);
  }
  obtenerLocal(id: any){
    // this.localesService.getLocalsById(id).subscribe(data =>{
    //   this.local = data;
    // });
  }
}
