import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule  } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { CompanyMainComponent } from './company-main/company-main.component';
import { AllCompanyComponent } from './all-company/all-company.component';
import { CompanyDashComponent } from './company-dash/company-dash.component';
import { EmployeesComponent } from './employees/employees.component';
import { PayrollCenterComponent } from './payroll-center/payroll-center.component';
import { AppRoutingModule } from '..//app-routing.module';
import { EmployeeDetailComponent } from './employees/employee-detail/employee-detail.component';
import { EmployeeListService } from '../shared/employee/employee-list.service';
 import { OverviewComponent } from './employees/employee-detail/overview/overview.component';

@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [EmployeeListService],
  declarations: [ CompanyMainComponent, AllCompanyComponent, CompanyDashComponent, EmployeesComponent,
     PayrollCenterComponent, EmployeeDetailComponent, OverviewComponent],
  exports:[CompanyMainComponent, AllCompanyComponent,EmployeeDetailComponent]
})
export class CompanyModule { }
