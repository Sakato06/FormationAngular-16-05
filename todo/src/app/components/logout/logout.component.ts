import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  // isAuth$!: Observable<boolean>;
  // subscribe!: Subscription;
  constructor(public auth: AuthService) { }

  ngOnInit(): void {
    // this.isAuth$ = this.auth.isAuth$;
  }

  // get isAuth() {
  //   let tmp: boolean = false;
  //   this.subscribe = this.isAuth$.subscribe(val => {
  //     tmp = val;
  //   })
  //   return tmp;
  // }
}
