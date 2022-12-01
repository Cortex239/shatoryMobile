import { Component, OnInit } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { User } from 'backend/models/user';
import { UsuarioService } from 'src/app/services/usuarios/usuario.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  rut: string;
  name: string;
  lastname: string;
  password: string | undefined;
  email: string;
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
  }
  enviarUsuario(){
    const user: User={
      rut: this.rut,
      name: this.name,
      lastname: this.lastname,
      password: this.password,
      email: this.email

    };
    const userJson = JSON.stringify(user);
    this.usuarioService.guardarUsuario(userJson).subscribe(async (token)  => {
      await this.guardarToken(token);
      window.location.href='/';
    });
  }
  valid(value: any){
    if(value){
      return true;
    }
    return false;
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
}
