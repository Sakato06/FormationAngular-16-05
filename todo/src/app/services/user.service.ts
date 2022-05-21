import { Injectable } from '@angular/core';
import { User } from './../class/user.model';
import { BehaviorSubject } from 'rxjs'

const users: User[] = [
  new User("toto", "tutu", "toto@live.fr", "semi-croustillant", ["sournois", "sauvage"]),
  new User("tutu", "toto", "tutu@live.fr", "jean jean", ["habile", "vif"])
]

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _list = new BehaviorSubject<User[]>([]);
  readonly list$ = this._list.asObservable();

  private list: User[] = [];

  constructor() {
    this.list = Object.assign([], users);
    this.emitUsers(this.list);
  }

  emitUsers(list: User[]) {
    this._list.next(Object.assign([], list));
  }

  addUser(user: User): void {
    this.list.push(user);
    this.emitUsers(this.list);
  }
}
