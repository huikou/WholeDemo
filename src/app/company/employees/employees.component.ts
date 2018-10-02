import { Component, OnInit } from '@angular/core';
import { EmployeeListService } from '../../shared/employee/employee-list.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import {MatDialog, MatDialogConfig} from "@angular/material";
<<<<<<< HEAD
=======
import { EmployeePopupComponent } from './employee-popup/employee-popup.component';

>>>>>>> acdf571cf86d12772ad8a846ce9deaa569d000d8
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
<<<<<<< HEAD
  constructor(private employeeListService : EmployeeListService, private router : Router,private dialog: MatDialog) { }
=======
  constructor(private employeeListService : EmployeeListService, private router : Router, private dialog: MatDialog) { }
>>>>>>> acdf571cf86d12772ad8a846ce9deaa569d000d8

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

<<<<<<< HEAD
  openDialog() {

    const dialogConfig = new MatDialogConfig();
=======
  openDialog(i) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      id: 1,
      title: 'Angular For Beginners'
  };

  const dialogRef=this.dialog.open(EmployeePopupComponent, dialogConfig);


    dialogRef.afterClosed().subscribe(
        data => console.log("Dialog output:", data)
    );    
  }
>>>>>>> acdf571cf86d12772ad8a846ce9deaa569d000d8

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(CourseDialogComponent, dialogConfig);
  }
}
