import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ShukiService implements CanActivate {

  canActivate(): boolean  {
    let t="iiiiiiiiiiiiiiiiiii";
    console.log(t);
    return false
  }
  constructor() { }
}
