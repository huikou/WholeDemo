import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payroll-center',
  templateUrl: './payroll-center.component.html',
  styleUrls: ['./payroll-center.component.css']
})
export class PayrollCenterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  columnDefs = [
    {headerName: 'Make', field: 'make'},
    {headerName: 'Model', field: 'model'},
    {headerName: 'Price', field: 'price',editable: true}
];

rowData = [
    {make: 'Toyota', model: 'Celica', price: 35000},
    {make: 'Ford', model: 'Mondeo', price: 32000},
    {make: 'Porsche', model: 'Boxter', price: 72000}
];


}
