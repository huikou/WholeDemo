import { Component, OnInit , ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import {MatPaginator, MatTableDataSource, MatSort} from '@angular/material';

export interface Company {
  CompanyId: string,
  CompanyName: string,
  DBA: string,
  NextPayDate: string,
  ActiveEmployees: number,
  ContactName: string,
  Phone: string,
  Status: string
}

const companyList: Company[]=[
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
    ActiveEmployees: 96,
    ContactName: 'Benjamin Romero',
    Phone: '(167)361-3707',
    Status: 'Active'
  },
  {
    CompanyId:'0000490',
    CompanyName: 'Belle Foods',
    DBA: 'In',
    NextPayDate: '3/17/2018',
    ActiveEmployees: 85,
    ContactName: 'Benjamin Romero',
    Phone: '(167)361-3707',
    Status: 'Active'
  },
  {
    CompanyId:'0000490',
    CompanyName: 'Belle Foods',
    DBA: 'In',
    NextPayDate: '3/17/2018',
    ActiveEmployees: 94,
    ContactName: 'Benjamin Romero',
    Phone: '(167)361-3707',
    Status: 'Active'
  },
  {
    CompanyId:'0000490',
    CompanyName: 'Belle Foods',
    DBA: 'In',
    NextPayDate: '3/17/2018',
    ActiveEmployees: 93,
    ContactName: 'Benjamin Romero',
    Phone: '(167)361-3707',
    Status: 'Active'
  },
  {
    CompanyId:'0000490',
    CompanyName: 'Belle Foods',
    DBA: 'In',
    NextPayDate: '3/17/2018',
    ActiveEmployees: 93,
    ContactName: 'Benjamin Romero',
    Phone: '(167)361-3707',
    Status: 'Active'
  },
  {
    CompanyId:'0000490',
    CompanyName: 'Belle Foods',
    DBA: 'In',
    NextPayDate: '3/17/2018',
    ActiveEmployees: 91,
    ContactName: 'Benjamin Romero',
    Phone: '(167)361-3707',
    Status: 'Active'
  },
  {
    CompanyId:'0000490',
    CompanyName: 'Belle Foods',
    DBA: 'In',
    NextPayDate: '3/17/2018',
    ActiveEmployees: 90,
    ContactName: 'Benjamin Romero',
    Phone: '(167)361-3707',
    Status: 'Active'
  }
];


@Component({
  selector: 'app-all-company',
  templateUrl: './all-company.component.html',
  styleUrls: ['./all-company.component.css']
})
export class AllCompanyComponent implements OnInit {
  displayedColumns: string[] = ['CompanyId', 'CompanyName', 'DBA', 'NextPayDate', 'ActiveEmployees','ContactName', 'Phone','Status'];
  dataSource;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('companyPaginator') paginator: MatPaginator;
 
  count;
  constructor(private router : Router) { }
  show=true;

  ngOnInit() {
    this.show=true;
    this.dataSource=new MatTableDataSource(companyList);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.dataSource.filterPredicate = 
  (data: Company, filter: string) => data.CompanyName.toLowerCase().indexOf(filter) != -1;

   // this.count=companyList.length;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }


  setClickedRow = function(index){
    this.selectedRow = index;
    // this.show=!this.show;
    this.router.navigate(['/layout/company/companyMain']);
  }

  onRowClicked(row) {
    this.router.navigate(['/layout/company/companyMain']);
  }

  openDialog(incident:Company) {
  //  const dialogRef = this.dialog.open(IncidentDetailsComponent, {height: '700px', 'data': {'incident': incident}});
  }

  renderPDF(id: number) {
    // this.incidentsService.getPdfById(id)
    //   .subscribe(response => {
    //     console.log('Response: ' + response);
    //     const file = new Blob([response], {type: 'application/pdf'});
    //     const fileURL = URL.createObjectURL(file);
    //     window.open(fileURL);
    //   });
  }
}
