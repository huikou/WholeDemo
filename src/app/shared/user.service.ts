import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from "@angular/http";
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly authUrl = 'https://apidev.employerondemand.com/OAuth';
  readonly rootUrl = 'http://localhost:50877';
  constructor(private http: HttpClient) { }

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

  getCompanies(){
   return  this.http.get(this.rootUrl+'/api/v1/Companies/');
  }
}
