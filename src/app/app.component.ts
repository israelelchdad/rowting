import { Component } from '@angular/core';
import { LoginService } from './dervices/gurds/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rowter';
  constructor(private svc:LoginService){
    
  }
}
