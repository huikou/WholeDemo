import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-company',
  templateUrl: './all-company.component.html',
  styleUrls: ['./all-company.component.css']
})
export class AllCompanyComponent implements OnInit {
  companyList: any[];
  count;
  constructor(private router : Router) { }
 show=true;
  ngOnInit() {
    this.show=true;
    this.companyList=[
      {
          CompanyId:'0000209',
          CompanyName: 'Johns Shoes',
          DBA: 'So',
          NextPayDate: '3/17/2018',
          ActiveEmployees: 97,
          ContactName: 'Keith Thompson',
          Phone: '717401-3707',
          Status: 'Active'

      },
      {
        CompanyId:'0000490',
        CompanyName: 'Belle Foods',
        DBA: 'In',
        NextPayDate: '3/17/2018',
        ActiveEmployees: 28,
        ContactName: 'Benjamin Romero',
        Phone: '(167)361-3707',
        Status: 'Active'
      }
    ];
    this.count=this.companyList.length;
  }
  setClickedRow = function(index){
    this.selectedRow = index;
    // this.show=!this.show;
    this.router.navigate(['/layout/company/companyMain']);
  }
}
