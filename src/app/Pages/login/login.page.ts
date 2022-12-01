import { Component, OnInit } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { UsuarioService } from 'src/app/services/usuarios/usuario.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  password: string;
  email: string;
  constructor(private usuarioService: UsuarioService, private storageService: StorageService) { }

  ngOnInit() {
  }
  existUser() {

    const user = {
      email: this.email,
      password: this.password,
    };

    const userJson = JSON.stringify(user);
    this.usuarioService.iniciarSesion(userJson).subscribe(async (token) => {
      await this.storageService.set('token', token);
      window.location.href = '/';
    });
  };

 

  valid(value: any) {
    if (value) {
      return true;
    }
    return false;
  };
}
