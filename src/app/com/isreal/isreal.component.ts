import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-isreal',
  templateUrl: './isreal.component.html',
  styleUrls: ['./isreal.component.css']
})
export class IsrealComponent implements OnInit {
  str:string;

  constructor(public activ:ActivatedRoute) { }

  ngOnInit() {
    this.activ.data.subscribe(d=>{
      
      console.log("i",d);
      this.str=d.title;
      
    })
  }

}
