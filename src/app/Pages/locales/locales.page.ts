import { Component, OnInit } from '@angular/core';
import { LocaService } from 'src/app/services/local/loca.service';
import { Local } from 'src/app/interfaces/local';
import {  Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-locales',
  templateUrl: './locales.page.html',
  styleUrls: ['./locales.page.scss'],
})
export class LocalesPage implements OnInit {

  list: Array<Local> = [];
  //artistService:ArtistService;
  constructor(private localesService: LocaService,private router: Router, private location: Location) { }

  ngOnInit() {
    this.getLocals();
  }

  getLocals() {
    this.localesService.getLocals().subscribe(data => {
      this.list = data;
      console.log(data);
    });
  }
  obtenerLocal(id: any){
    this.router.navigate(['perfil-local/'+JSON.stringify(id)]);
  }
}
