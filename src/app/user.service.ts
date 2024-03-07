import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class UserService {
  private user= new BehaviorSubject<string>('trilok');
  cast=this.user.asObservable()
  constructor() { }
  editUser(newuser){
    this.user.next(newuser)
  }

}