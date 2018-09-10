import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { CompanyListComponent } from './company-list/company-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MainComponent, CompanyListComponent],
  exports: [
    MainComponent
  ],
  entryComponents: [
    CompanyListComponent
  ]
})
export class DashboardModule { }
