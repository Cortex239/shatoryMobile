import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.page.html',
  styleUrls: ['./perfil-usuario.page.scss'],
})
export class PerfilUsuarioPage implements OnInit {

  constructor(private storageService: StorageService) { }

  ngOnInit() {
  }

  async logout() {
    await this.storageService.remove('token');
    window.location.href = '/';
  }
}
