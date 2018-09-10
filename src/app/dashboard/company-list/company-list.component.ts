import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CompanyListService } from '../../shared/company/company-list.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  @Input() anyDataForm: any;
  companyList: any[];
  constructor(private companyListService : CompanyListService, public activeModal: NgbActiveModal, ) { }

  ngOnInit() {
    this.companyListService.getCompanies().subscribe((data : any[])=>{
       this.companyList=data;
    },
    (err : HttpErrorResponse)=>{
      // this.isLoginError = true;
    });
  }
  ngOnDestroy(): void {
  }

  closeModal(){
    this.activeModal.close();
  }

  dissmiss(){
    
  }
}
