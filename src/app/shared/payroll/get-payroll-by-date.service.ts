import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Response } from "@angular/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetPayrollByDateService {
  //readonly rootUrl = 'http://localhost:50877';
  readonly rootUrl = 'http://axdweb01:7002';
  constructor(private http: HttpClient) { }

  getPayrollByDate(){
    let params = new HttpParams();
    params = params.append('startDate', "2017-06-01");
    params = params.append('endDate', "2017-07-30");

    return  this.http.get<any>(this.rootUrl+'/api/v2/Companies/00010029/PayrollResults', {params: params});
   }
}
