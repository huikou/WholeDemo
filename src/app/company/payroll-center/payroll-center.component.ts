import { Component, OnInit } from '@angular/core';
import { GetPayrollByDateService } from '../../shared/payroll/get-payroll-by-date.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payroll-center',
  templateUrl: './payroll-center.component.html',
  styleUrls: ['./payroll-center.component.css']
})
export class PayrollCenterComponent implements OnInit {
  gridOptions: any;
  rowData: any[];
  private paginationPageSize;
  private paginationNumberFormatter;
  private gridApi;
  constructor(private getPayrollByDateService :GetPayrollByDateService) {
    this.paginationPageSize = 4;
    this.paginationNumberFormatter = function(params) {
      return "[" + params.value.toLocaleString() + "]";
    };
   }

  ngOnInit() {
    this.getPayrollByDateService.getPayrollByDate().subscribe((data : any[])=>{
      this.rowData=data;
      
  },
  (err : HttpErrorResponse)=>{
    // this.isLoginError = true;
  });
    
  }
  columnDefs = [
    {headerName: 'Payroll Id', field: 'payrollID'},
    {headerName: 'Payroll Date', field: 'payDate'},
    {headerName: 'Pay Frequency', field: 'payFrequency'},
    {headerName: 'Pay Number' , field: 'payNumber'},
    {headerName: 'Net Pay', field: 'netPay',editable: true},
    {headerName: 'Gross Pay', field: 'grossPay',editable: true},
    {headerName: 'Base Pay Rate', field: 'basePayRate',editable: true},
];

// rowData = [
//     {make: 'Toyota', model: 'Celica', price: 35000},
//     {make: 'Ford', model: 'Mondeo', price: 32000},
//     {make: 'Porsche', model: 'Boxter', price: 72000}
// ];
onCellValueChanged(params: any) {
//   this.athleteService.save(params.data)
//                      .subscribe(
//                          savedAthlete => {
//                              console.log('Athlete Saved');
//                              this.setAthleteRowData();
//                          },
//                          error => console.log(error)
//                      )
}

onPageSizeChanged(newPageSize) {
  // var value = document.getElementById("page-size").value;
  // this.gridApi.paginationSetPageSize(Number(value));
}
onGridReady(params) {
  this.gridApi = params.api;
  // this.gridColumnApi = params.columnApi;

  // this.http
  //   .get("https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinners.json")
  //   .subscribe(data => {
  //     this.rowData = data;
  //     params.api.paginationGoToPage(4);
  //   });
}
}
