import { Component, OnInit } from '@angular/core';
import { EmployeeListService } from '../../shared/employee/employee-list.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
 employeeList: any[];
 isList=true;
 selectedRow: number;
  constructor(private employeeListService : EmployeeListService, private router : Router) { }

  ngOnInit() {
    this.employeeListService.getEmployees().subscribe((data : any)=>{
        this.employeeList=data.result;
        this.isList=true;
    },
    (err : HttpErrorResponse)=>{
      // this.isLoginError = true;
    });
  }

  getEmployeeDetail(i){
    this.isList= !this.isList;
    let employee=this.employeeList[i];
    this.selectedRow = i;
    // this.router.navigate(['/layout/companyMain/employees/employeeDetail']);
  }


}
