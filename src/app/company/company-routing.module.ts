import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { CompanyMainComponent } from './company-main/company-main.component';
import { AllCompanyComponent } from './all-company/all-company.component';
import { CompanyDashComponent } from './company-dash/company-dash.component';
import { EmployeesComponent } from './employees/employees.component';
import { PayrollCenterComponent } from './payroll-center/payroll-center.component';
// import { AppRoutingModule } from '..//app-routing.module';
import { EmployeeDetailComponent } from './employees/employee-detail/employee-detail.component';
import { EmployeeListService } from '../shared/employee/employee-list.service';
 import { OverviewComponent } from './employees/employee-detail/overview/overview.component';
import { GeneralInfoComponent } from './employees/employee-detail/general-info/general-info.component';
import { EmploymentComponent } from './employees/employee-detail/employment/employment.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {path: '', component: AllCompanyComponent, canActivate:[AuthGuard] },
  {path: 'companyMain', component: CompanyMainComponent, canActivate:[AuthGuard],  
      children:[
                {path: 'companyDash', component: CompanyDashComponent, canActivate:[AuthGuard] } ,
                {path: 'employees', component: EmployeesComponent, canActivate:[AuthGuard],
                children:[
                  {path: 'employeeDetail', component: EmployeeDetailComponent, canActivate:[AuthGuard]}
                ] } ,
                {path: 'payrollCenter', component: PayrollCenterComponent, canActivate:[AuthGuard]} ,
                {path: 'overview', component: OverviewComponent, canActivate:[AuthGuard]}, 
                {path: 'generalInfo', component: GeneralInfoComponent, canActivate:[AuthGuard]},
        ]
  }

];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class CompanyRoutingModule { }
