import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { DashboardModule } from './dashboard/dashboard.module';
import { MainComponent } from './dashboard/main/main.component';
import { UserComponent } from './user/user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { LayoutComponent } from './ui/layout/layout.component';
import { AllCompanyComponent } from './company/all-company/all-company.component';
import { CompanyMainComponent } from './company/company-main/company-main.component';
import { CompanyDashComponent } from './company/company-dash/company-dash.component';
import { EmployeesComponent } from './company/employees/employees.component';
import { PayrollCenterComponent } from './company/payroll-center/payroll-center.component';
import { EmployeeDetailComponent } from './company/employees/employee-detail/employee-detail.component';
import { OverviewComponent } from './company/employees/employee-detail/overview/overview.component';
import { GeneralInfoComponent } from './company/employees/employee-detail/general-info/general-info.component';

const routes: Routes = [
  { path : '', redirectTo:'/login', pathMatch : 'full'},
  { 
    path: 'layout', component: LayoutComponent ,
    children: [{path: 'dashboard', component: MainComponent, canActivate:[AuthGuard] },
               {path: '', redirectTo:'dashboard', pathMatch : 'full'},
               {path: 'company', component: AllCompanyComponent, canActivate:[AuthGuard] },
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
              ]
  },
  {
    path: 'signup', component: UserComponent,
    children: [{ path: '', component: SignUpComponent }]
  },
  {
    path: 'login', component: SignInComponent,    
    // children: [{ path: 'dashboard', component: MainComponent }]
  },
];


@NgModule({
  imports: [
    [ RouterModule.forRoot(routes) ]
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
