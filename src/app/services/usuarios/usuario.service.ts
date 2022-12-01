/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StorageService } from '../storage.service';
import { User } from 'src/app/interfaces/user';
import { token } from 'morgan';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor( private http: HttpClient, private storageService: StorageService) {}

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
    return this.http.get<User>('https://shatory-backend.herokuapp.com/auth/getProfile', {headers: {
      'access-token' : tokenU}});
  };
}
