import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user:any;
  private api="https://jsonplaceholder.typicode.com/users/"

  constructor(public http:HttpClient,public act:ActivatedRoute) { }

  ngOnInit() {
    this.act.params.subscribe(da=>{
    let userid=da.id;
    console.log("userid=",userid)

    this.http.get(this.api+userid).subscribe(u=>{
      this.user=u
    console.log(this.user.id);
    })
  }
  )
  }

}
