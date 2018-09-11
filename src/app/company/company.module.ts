import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule  } from '@angular/material/tabs';
import { CompanyMainComponent } from './company-main/company-main.component';
import { AllCompanyComponent } from './all-company/all-company.component';
import { CompanyDashComponent } from './company-dash/company-dash.component';
import { EmployeesComponent } from './employees/employees.component';
import { PayrollCenterComponent } from './payroll-center/payroll-center.component';
import { AppRoutingModule } from '..//app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    AppRoutingModule
  ],
  declarations: [ CompanyMainComponent, AllCompanyComponent, CompanyDashComponent, EmployeesComponent, PayrollCenterComponent],
  exports:[CompanyMainComponent, AllCompanyComponent]
})
export class CompanyModule { }
