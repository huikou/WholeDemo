import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Response } from "@angular/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeListService {
  readonly rootUrl = 'http://localhost:50877';
  constructor(private http: HttpClient) { }

  getEmployees(){
    let params = new HttpParams();
    params = params.append('includeDeleted', "false");
    params = params.append('pageNo', "0");
    params = params.append('pageSize', "10");

    return  this.http.get<any>(this.rootUrl+'/api/v1/Companies/00010029/Employees', {params: params});
   }
}
