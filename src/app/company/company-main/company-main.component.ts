import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-main',
  templateUrl: './company-main.component.html',
  styleUrls: ['./company-main.component.css']
})

export class CompanyMainComponent implements OnInit {
 company: any;
 routeLinks: any[];
 activeLinkIndex = -1;

 constructor(private router: Router) {
    //  this.routeLinks = [
    //      {
    //          label: 'Company Dashboard',
    //          path: './companyDash',
    //          index: 0
    //      }, {
    //          label: 'Employees',
    //          path: './employees',
    //          index: 1
    //      }, {
    //          label: 'PayrollCenter',
    //          path: './payrollCenter',
    //          index: 2
    //      }

    //  ];
  }
  ngOnInit() {
    this.company={CompanyName:"Harvey LLC" };
  //   this.router.events.subscribe((res) => {
  //     this.activeLinkIndex = this.routeLinks.indexOf(this.routeLinks.find(tab => tab.link === '.' + this.router.url));
  // });
  }



}
