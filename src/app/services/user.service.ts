import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

//interfaces
import { LoginUser } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  loginEmail = localStorage.getItem('email');
  loginPassword = localStorage.getItem('password');

  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(private router: Router) { }

  login(user: LoginUser) {
    if (user.email === this.loginEmail && user.password === this.loginPassword) {
      this.loggedIn.next(true);
      alert('Login Successfully');
      this.router.navigate(['member/register']);
    } else {
      this.loggedIn.next(false);
      alert('Invalid Info');
      this.router.navigate(['login']);
    }
  }
}
