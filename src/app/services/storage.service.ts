import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { json } from 'sequelize';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

constructor() { }

  async set(key: string, value: any) {
    await Preferences.set({
      key: key,
      value: JSON.stringify(value),
    });
  }

  async get(key: string) {
    const value = await Preferences.get({ key: key });
    return JSON.parse(value.value);
  }

  async remove(key: string) {
    await Preferences.remove({ key: key });
  }

}


  
