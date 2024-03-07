import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
   user:string;
  constructor(private _user:UserService) { }

  ngOnInit() {
    this._user.cast.subscribe(res=>{
      this.user=res;
    })
  }

}