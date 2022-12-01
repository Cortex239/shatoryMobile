import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service'; 
import { User } from 'src/app/interfaces/user';
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
  constructor(private usuarioService: UsuarioService, private storageService: StorageService) { }

  ngOnInit() {
  }

  register(){

    const user: User={
      rut: this.rut,
      name: this.name,
      lastName: this.lastname,
      password: this.password,
      email: this.email
    };

    const userJson = JSON.stringify(user);
    
    this.usuarioService.guardarUsuario(userJson).subscribe( (token)  => {
      this.storageService.set('token', token);
      window.location.href='/';
    });
  }

  valid(value: any){
    if(value){
      return true;
    }
    return false;
  };
}
