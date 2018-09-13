import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
   
  showOverview=true;
  showEmployeeInfo=false;
  constructor() { }
  
  @Input() currentEmpl: any;
  // set empl(empl: any) {
  //   this.currentEmpl = empl;
  // }
 
  // get empl(): any {
  //    return this.currentEmpl;
  // }
  ngOnInit() {
  }

  toggleNavbar(i) {
    if(i==0){
      this.showOverview=true;
      this.showEmployeeInfo=false;
    }
    else if(i==1){
      this.showOverview=false;
      this.showEmployeeInfo=true;
    }
  }
  

}
