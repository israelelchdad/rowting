import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  pipul=[
    { name:'avi',age:1990},
    { name:'bibi',age:1991},
    { name:'ali',age:1992},
    { name:'didi',age:1993},
   
  ]

  constructor() { }

  ngOnInit() {
  }
  getyomholade(biurdy:number):number{
    console.log("running")
    let d=new Date().getFullYear()
    let b=d-biurdy
    console.log(b)
    return b
  }

}
