import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from "@angular/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly rootUrl = 'http://localhost:50877';
 
  constructor(private http: HttpClient) { }


}
