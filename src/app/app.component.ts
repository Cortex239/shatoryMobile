import { Component, OnInit } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { token } from 'morgan';
import { Subscription } from 'rxjs';
import { UsuarioService } from './services/usuarios/usuario.service';

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
  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(){
    this.obtenerToken();
  }

  async obtenerToken(){

    const ret = await Preferences.get({ key: 'token' });
    const tokenU = ret.value;

    console.log(ret);
    // this.verNombre(Preferences.get({key: 'token'}));


  //   if(Preferences.get({key: 'token'})){
  //     this.vld = true;
  //     return;
  //   }
  //   this.vld = false;
  //   return;
  };

  verNombre(tokenu){
    this.usuarioService.obtenerUsuario(tokenu).subscribe();
  }
}
