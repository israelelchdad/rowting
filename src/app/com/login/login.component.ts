import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../dervices/gurds/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public svc:LoginService,private rowter:Router) {}

  ngOnInit() {
  }
  login(){
    this.svc.isLoggedIn=true;
    console.log(this.svc.isLoggedIn);
    
    this.rowter.navigateByUrl('');

  }

}
