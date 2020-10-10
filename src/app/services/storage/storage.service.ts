import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }


  // JSON "set" example
async saveToLocalStorage(key:string,value:any) {
  await Storage.set({
    key,
    value: JSON.stringify(value)
  });
}

// JSON "get" example
async getFromLocalStorage(key:string):Promise<any> {
  const ret = await Storage.get({ key});
  return  JSON.parse(ret.value);
}

async removeFromLocalStorage(key:string):Promise<void>{
  return await Storage.remove({key});
}

async clearLocalStorage(){
  await Storage.clear();
}
}

