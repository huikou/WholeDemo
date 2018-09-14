import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  isEdit=true;
  steps=[
    {label:'Overview', isCurrent:true, complete:false, disable: true},
    {label:'General Info', isCurrent:false, complete:false, disable: false},
    {label:'Employment', isCurrent:false, complete:false, disable: false},
  ];
  showOverview=true;
  showEmployeeInfo=false;
  showEmployment=false;
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

  toggleNavbar(index) {
    for (let i = 0; i < this.steps.length; i++) {
      if(index==i){
        this.steps[i].isCurrent=true;
      }
      else{
        this.steps[i].isCurrent=false;
      }
    }
  }
  
  addEmployee(add){
     if(add){
        this.isEdit=false;
        this.currentEmpl={};
     }
     else{

     }
  }
}
