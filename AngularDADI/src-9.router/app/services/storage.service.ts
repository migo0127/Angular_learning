import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  // 設定localStorage
  set(key:string,value:any){
    localStorage.setItem(key,JSON.stringify(value));
  }

  // 獲取localStorage
  get(key:string){
    return JSON.parse(localStorage.getItem(key));
  }

  // 移除localStorage
  remove(key:string){
    localStorage.removeItem(key);
  }

}
