import { Component, OnInit } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { token } from 'morgan';

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
  constructor() {}
  ngOnInit(){
    this.obtenerToken();
  }
  obtenerToken(){
    Preferences.get({key: 'token'});
    if(Preferences.get({key: 'token'})){
      this.vld = true;
      return;
    }
    this.vld = false;
    return;
  }
}
