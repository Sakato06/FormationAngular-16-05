import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/class/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {
  list$! : Observable<User[]>;
  subscribe! : Subscription;

  constructor(public userService: UserService) {}

  ngOnInit(): void {
    this.list$ = this.userService.list$;
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }

  get list(): User[] {
    let tmp: User[] = [];
    this.subscribe=  this.list$.subscribe(val => {
      tmp = val;
    });
    return tmp;
  }

  trackByFunction(index: number, item: any): number {
    return item.id;
  }
}
