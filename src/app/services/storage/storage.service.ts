import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }


  // JSON "set" example
async setObject(key:string,value:any) {
  await Storage.set({
    key,
    value: JSON.stringify(value)
  });
}

// JSON "get" example
async getObject(key:string):Promise<{value:any}> {
  const ret = await Storage.get({ key});
  return  JSON.parse(ret.value);
}

async removeItem(key:string){
  await Storage.remove({key});
}

async clear(){
  await Storage.clear();
}
}

