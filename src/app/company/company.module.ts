import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule  } from '@angular/material/tabs';
// import { RouterModule } from '@angular/router';
import {MatButtonModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule, MatToolbarModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
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
import { CompanyRoutingModule } from './/company-routing.module';


@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    // AppRoutingModule,
    CompanyRoutingModule,
    // RouterModule,
    CommonModule, MatButtonModule,MatToolbarModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule,
    MatFormFieldModule,
    FormsModule,
    [AgGridModule.withComponents(null)]
  ],
  providers: [EmployeeListService],
  declarations: [ CompanyMainComponent, AllCompanyComponent, CompanyDashComponent, EmployeesComponent,
     PayrollCenterComponent, EmployeeDetailComponent, OverviewComponent, GeneralInfoComponent, EmploymentComponent],
  exports:[CompanyMainComponent, AllCompanyComponent,EmployeeDetailComponent,
    CommonModule, MatButtonModule, MatToolbarModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule ]
})
export class CompanyModule { }
