/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { User } from 'backend/models/user';
import { token } from 'morgan';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor( private http: HttpClient) {}

  guardarUsuario(user){
    return this.http.post('https://shatory-backend.herokuapp.com/auth/signUp',user,{headers: {
          'Content-Type' : 'application/json'}
    });
  };
  iniciarSesion(usermp){
    return this.http.post('https://shatory-backend.herokuapp.com/auth/signIn',usermp,{headers: {
      'Content-Type' : 'application/json'}
  });
  };
  obtenerUsuario(tokenU: string){
    console.log('hola');
    return this.http.get('https://shatory-backend.herokuapp.com/auth/getProfile',{headers: {
      'access-token' : tokenU}});
  };

}
