import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn: boolean = false;

  login() {
    this.loggedIn = true;
  }
  logout() {
    this.loggedIn = false;
  }

  isLoggedin() {
    return this.loggedIn;
  }
}
