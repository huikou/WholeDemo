import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from './main/main.component';
import { AuthGuard } from '../auth/auth.guard';
import { CompanySetupComponent } from '../shared-module/company-setup/company-setup.component';

const routes: Routes = [
  {path: '', component: MainComponent, canActivate:[AuthGuard] ,
              children:[
        {path: 'companySetup', component: CompanySetupComponent}
         ]   },
  // {path: 'dashboard', component: MainComponent, canActivate:[AuthGuard],   
  //       children:[
          //  {path: 'companySetup', component: CompanySetupComponent}
       // ]  
 // }
]
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class DashboardRoutingModule { }
