import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedIn:boolean = false

  constructor(public rowter:Router) {
    this.rowter.events.subscribe(roternav=>{
      if(roternav instanceof NavigationEnd){
        if(this.rowter.url.includes('login')==false){
          if(this.isLoggedIn==false){
            this.rowter.navigateByUrl('/login')
          }

        }
      }
    })

   }
}
