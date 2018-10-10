import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }
  // getToken(): string {
  //   return localStorage.getItem(TOKEN_NAME);
  // }

  // setToken(token: string): void {
  //   localStorage.setItem(TOKEN_NAME, token);
  // }

  // getTokenExpirationDate(token: string): Date {
  //   const decoded = jwt_decode(token);

  //   if (decoded.exp === undefined) return null;

  //   const date = new Date(0); 
  //   date.setUTCSeconds(decoded.exp);
  //   return date;
  // }

  isTokenExpired(token?: string): boolean {
    // if(!token) token = this.getToken();
    // if(!token) return true;
    const timer = JSON.parse(localStorage.getItem('timer'));
    if (timer && (Date.now() > timer)) {
      return true;
     // this.logout();
     // this.router.navigate(['/login']);
    }
    else{
      return false;
    }
  //  const date = this.getTokenExpirationDate(token);
  //  if(date === undefined) return false;
    //return !(date.valueOf() > new Date().valueOf());
  }


  isLoggedIn() {
    if (localStorage.getItem('userToken') == null || this.isTokenExpired()) {
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
