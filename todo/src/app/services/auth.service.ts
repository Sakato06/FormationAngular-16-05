import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isAuth: boolean = false;

  constructor(private router: Router) {}

  login(): void {
    setTimeout(() => {
      this.isAuth = true;
      this.router.navigate(['todolist']);
    }, 2000);
  }

  logout(): void {
    this.isAuth = false;
    this.router.navigate(['login']);
  }

}
