import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-dash',
  templateUrl: './company-dash.component.html',
  styleUrls: ['./company-dash.component.css']
})
export class CompanyDashComponent implements OnInit {
showDashboard: boolean=true;
  constructor() { }

  ngOnInit() {
  }

  editCompany(){
    this.showDashboard=false;
    //this.router.navigate(['/layout/dashboard/companySetup']);
}

}
