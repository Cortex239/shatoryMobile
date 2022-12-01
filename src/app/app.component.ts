/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UsuarioService } from './services/usuarios/usuario.service';
import { StorageService } from './services/storage.service';
import { User } from './interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent  implements OnInit{
  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  vld: boolean;
  constructor(private usuarioService: UsuarioService, private storageService: StorageService) {}

  user: User;
  name: string;

  ngOnInit(){
    this.autoLogin();
  }

  async autoLogin(){

    const token = await this.storageService.get('token');
    if(!token){
      console.log('No hay token');
      this.vld = true;
      return;
    }
    this.usuarioService.obtenerUsuario(token.token).subscribe((data) => {
      this.user = data;
      this.usuarioService.iniciarSesion(this.user);
      this.name = data[0].name;
    });
  }
}
