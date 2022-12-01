import { Component, OnInit } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { UsuarioService } from 'src/app/services/usuarios/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  password: string;
  email: string;
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
  }
  existUser(){
    console.log(this.email);
    const user ={
      email: this.email,
      password: this.password,
    };
    const userJson = JSON.stringify(user);
    console.log(userJson);
    this.usuarioService.iniciarSesion(userJson).subscribe(async (token)  => {
      await this.guardarToken(token);
      window.location.href='/';
    });
  };
  guardarToken = async (token) => {
    await Preferences.set({
      key: 'token',
      value: token,
    }).then(() => {
      console.log('El token se guardó correctamente');
    }).catch((error) => {
      console.log('Error al guardar el token');
    });
  };

  valid(value: any){
    if(value){
      return true;
    }
    return false;
  };
}
