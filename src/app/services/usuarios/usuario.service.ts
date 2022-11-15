/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { User } from 'backend/models/user';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor( private http: HttpClient) {}
  async guardarUsuario(user){
    return await fetch('https://shatory-backend.herokuapp.com/auth/signUp',{
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: user
  });
  }
}
