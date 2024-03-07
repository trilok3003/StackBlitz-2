import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

   user:string;
   edituser1:string;
  constructor(private _user:UserService) { }

  ngOnInit() {
   this._user.cast.subscribe(res=>{
     this.user=res;
   })
  }
  edit(){
    this._user.editUser(this.edituser1);
  }

}