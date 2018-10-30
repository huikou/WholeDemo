import { Component, OnInit } from '@angular/core';
import {  
  NgbModal,  
  ModalDismissReasons  
} from '@ng-bootstrap/ng-bootstrap';  
import { CompanyListComponent } from '../company-list/company-list.component';
import { ReferalSourceChartComponent } from './referal-source-chart/referal-source-chart.component';
import { AuthGroup } from 'src/app/auth/roleRights.types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  view:AuthGroup='VIEW_ONLY';
  isMain:boolean=true;
  constructor(private modalService: NgbModal, private router : Router) {     }
  showModal() {  
    this.modalService.open(CompanyListComponent,{ size: 'lg' } ).result.then(  
        (closeResult) => {  
            //modal close  
            console.log("modal closed : ", closeResult);  
        }, (dismissReason) => {  
            //modal Dismiss  
            if (dismissReason == ModalDismissReasons.ESC) {  
                console.log("modal dismissed when used pressed ESC button");  
            } else if (dismissReason == ModalDismissReasons.BACKDROP_CLICK) {  
                console.log("modal dismissed when used pressed backdrop");  
            } else {  
                console.log(dismissReason);  
            }  
        })  
    }  
  ngOnInit() {
  }

  close(){
    this.modalService.dismissAll();
  }
  
  showExpandChart() {  
    this.modalService.open(ReferalSourceChartComponent,{ size: 'lg' } ).result.then(  
        (closeResult) => {  
            //modal close  
            console.log("modal closed : ", closeResult);  
        }, (dismissReason) => {  
            //modal Dismiss  
            if (dismissReason == ModalDismissReasons.ESC) {  
                console.log("modal dismissed when used pressed ESC button");  
            } else if (dismissReason == ModalDismissReasons.BACKDROP_CLICK) {  
                console.log("modal dismissed when used pressed backdrop");  
            } else {  
                console.log(dismissReason);  
            }  
        })  
    }  
  addCompany(){
      this.isMain=false;
      this.router.navigate(['/layout/dashboard/companySetup']);
  }
}
