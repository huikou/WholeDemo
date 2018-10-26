import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { User } from '../shared/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const TOKEN_NAME='userToken';
const TOKEN_ExpiredTime='tokenTimer'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly authUrl = 'https://apidev.employerondemand.com/OAuth';

  constructor(private router: Router, private http: HttpClient) { }

  getToken(): string {
    return localStorage.getItem(TOKEN_NAME);
  }

  setToken(token: any): void {
    localStorage.setItem(TOKEN_NAME, token.access_token);
    var now = Math.floor(Date.now()/1000);
    const time_to_login = now + token.expires_in - 200;
    localStorage.setItem(TOKEN_ExpiredTime, JSON.stringify(time_to_login));
  }

  getTokenExpirationDate(token: string): any {
  }

  isTokenExpired(token?: string): boolean {
    if(!token) token = this.getToken();
    if(!token) return true;
    const timer = JSON.parse(localStorage.getItem(TOKEN_ExpiredTime));
    if(!timer) return true;
    var now = Math.floor(Date.now()/1000);
    if (timer && (now > timer)) {
      return true;
    }
    else{
      return false;
    }
  //  const date = this.getTokenExpirationDate(token);
  //  if(date === undefined) return false;
    //return !(date.valueOf() > new Date().valueOf());
  }


  isLoggedIn() {
    if (localStorage.getItem(TOKEN_NAME) == null || this.isTokenExpired()) {
      return false;
    }
    return true;
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem(TOKEN_NAME);
    localStorage.removeItem(TOKEN_ExpiredTime);
    this.router.navigateByUrl('/login');
  }

  
  registerUser(user: User) {
    const body: User = {
      UserName: user.UserName,
      Password: user.Password,
      Email: user.Email,
      FirstName: user.FirstName,
      LastName: user.LastName
    }
    var reqHeader = new HttpHeaders({'No-Auth':'True'});
    return this.http.post(this.authUrl + '/api/User/Register', body,{headers : reqHeader});
  }

  userAuthentication(userName, password) {
    var data = "username=" + userName + "&password=" + password + "&grant_type=password";
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded','No-Auth':'True',
                        "Authorization" : "Basic QmlnWWVsbG93OlBheW1lMkFCRw==",
                        "Accept": "application/json"});
                        
    return this.http.post(this.authUrl + '/token', 
              'grant_type=client_credentials', 
              { headers: reqHeader });
  }


}
