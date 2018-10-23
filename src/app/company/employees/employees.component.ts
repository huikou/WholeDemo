import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { EmployeeListService } from '../../shared/employee/employee-list.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import {MatDialog, MatDialogConfig, Sort, PageEvent} from "@angular/material";
import { EmployeePopupComponent } from './employee-popup/employee-popup.component';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'app-employees'
  }
})
export class EmployeesComponent implements OnInit {
 employeeList: any[];
 isList=true;
 selectedRow: number;
 selectedEmpl:any;
 currentPage = 0;
  pageSize = 5;
  totalSize = 0;
  datasource = [];
  pageEvent: PageEvent;
  constructor(private employeeListService : EmployeeListService, private router : Router, private dialog: MatDialog) { }
  // @ViewChild('manufacturersPaginator')

  sortData(sort: Sort) {
    const data = this.employeeList;
    if (!sort.active || sort.direction === '') {
      this.employeeList = data;
      return;
    }

    this.employeeList = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'lastName': return compare(a.lastName, b.lastName, isAsc);
        case 'firstName': return compare(a.firstName, b.firstName, isAsc);
        // case 'fat': return compare(a.fat, b.fat, isAsc);
        // case 'carbs': return compare(a.carbs, b.carbs, isAsc);
        // case 'protein': return compare(a.protein, b.protein, isAsc);
        default: return 0;
      }
    });
  }

    onPageChanged(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.iterator();
  }

  applyFilter(filterValue: string) {
    
    if(filterValue) {
      filterValue = filterValue.trim(); // Remove whitespace
      filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches

      this.employeeList= this.employeeList.filter(function(employee){
      return employee.lastName.toLowerCase().indexOf(filterValue.toLowerCase()) > -1;
    })
    }
    else{
      this.iterator();
    }
    
  
  
  }
  ngOnInit() {
    this.employeeListService.getEmployees().subscribe((data : any)=>{
        this.datasource=data.result;
        this.isList=true;
        this.employeeList = this.datasource.slice(0,this.pageSize);
        this.totalSize=data.result.length;
    },
    (err : HttpErrorResponse)=>{
      // this.isLoginError = true;
    });
  }

  getEmployeeDetail(i){
    this.isList= !this.isList;
    this.selectedEmpl=this.employeeList[i];
    this.selectedRow = i;
     this.router.navigate(['/layout/company/companyMain/employees/employeeDetail']);
  }

  iterator() {
    const end = (this.currentPage + 1) * this.pageSize;
    const start = this.currentPage * this.pageSize;
    const part = this.datasource.slice(start, end);
    this.employeeList = part;
  }

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
}
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}