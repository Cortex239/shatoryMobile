import { Component, OnInit } from '@angular/core';
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
    console.log(userJson);
    this.usuarioService.guardarUsuario(userJson);
  }
}
