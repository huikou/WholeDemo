import { Component, OnInit } from '@angular/core';
import { EmployeeListService } from '../../shared/employee/employee-list.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import {MatDialog, MatDialogConfig} from "@angular/material";
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
 employeeList: any[];
 isList=true;
 selectedRow: number;
 selectedEmpl:any;
  constructor(private employeeListService : EmployeeListService, private router : Router,private dialog: MatDialog) { }

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
    this.selectedEmpl=this.employeeList[i];
    this.selectedRow = i;
    // this.router.navigate(['/layout/companyMain/employees/employeeDetail']);
  }

  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(CourseDialogComponent, dialogConfig);
  }
}
