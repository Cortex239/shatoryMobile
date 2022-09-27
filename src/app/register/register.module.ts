import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterPageRoutingModule } from './register-routing.module';

import { RegisterPage } from './register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPageRoutingModule
  ],
  declarations: [RegisterPage]
})
export class RegisterPageModule {
  formulario:FormGroup;
  rut:AbstractControl;
  mail:AbstractControl;
  password:AbstractControl;
  name:AbstractControl;
  surname:AbstractControl;

  constructor(public fb:FormBuilder){ 
    this.formulario=this.fb.group({
      password:['',[Validators.required]],
      mail:['',[Validators.required]],
      name:['',[Validators.required]],
      surname:['',[Validators.required]],
      rut:['',[Validators.required]],
    });
    this.password=this.formulario.controls["password"];
    this.mail=this.formulario.controls["mail"];
    this.name=this.formulario.controls["name"];
    this.surname=this.formulario.controls["surname"];
    this.rut=this.formulario.controls["rut"];
  };
  
}
