import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Response } from "@angular/http";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CompanyListService {
  readonly rootUrl = 'http://localhost:50877';
  constructor(private http: HttpClient) { 
 
}
  getCompanies(){
    let params = new HttpParams();
    params = params.append('showAll', "true");

    return  this.http.get<any>(this.rootUrl+'/api/v1/Companies/00010088/Notes', {params: params});
   }
}
