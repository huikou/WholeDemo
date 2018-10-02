import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule  } from '@angular/material/tabs';
import {MatButtonModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule, MatToolbarModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import {MatDialogModule,MatDatepickerModule, MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, MatSelectModule} from "@angular/material";
import { CompanyMainComponent } from './company-main/company-main.component';
import { AllCompanyComponent } from './all-company/all-company.component';
import { CompanyDashComponent } from './company-dash/company-dash.component';
import { EmployeesComponent } from './employees/employees.component';
import { PayrollCenterComponent } from './payroll-center/payroll-center.component';
import { EmployeeDetailComponent } from './employees/employee-detail/employee-detail.component';
 import { OverviewComponent } from './employees/employee-detail/overview/overview.component';
import { GeneralInfoComponent } from './employees/employee-detail/general-info/general-info.component';
import { EmploymentComponent } from './employees/employee-detail/employment/employment.component';
import { CompanyRoutingModule } from './/company-routing.module';
import { EmployeePopupComponent } from './employees/employee-popup/employee-popup.component';


@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    CompanyRoutingModule,
    CommonModule, MatButtonModule,MatToolbarModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule,
    MatFormFieldModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatDatepickerModule,MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, MatSelectModule,
    [AgGridModule.withComponents(null)]
  ],
  declarations: [ CompanyMainComponent, AllCompanyComponent, CompanyDashComponent, EmployeesComponent,
     PayrollCenterComponent, EmployeeDetailComponent, OverviewComponent, GeneralInfoComponent, EmploymentComponent, EmployeePopupComponent],
  exports:[CompanyMainComponent, AllCompanyComponent,EmployeeDetailComponent,
    CommonModule, MatButtonModule, MatToolbarModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule ],
    entryComponents: [EmployeePopupComponent]
})
export class CompanyModule { }
