import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  isLoggedIn() {
    if (localStorage.getItem('userToken') == null) {
      return false;
    }
    return true;
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('userToken');
    this.router.navigateByUrl('/login');
  }

}
