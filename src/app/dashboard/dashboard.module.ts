import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { ReferalSourceChartComponent } from './main/referal-source-chart/referal-source-chart.component';
import { ChartsModule } from 'ng2-charts';
import { RevenueBreakdownChartComponent } from './main/revenue-breakdown-chart/revenue-breakdown-chart.component';
@NgModule({
  imports: [
    CommonModule,
    ChartsModule
  ],
  declarations: [MainComponent, CompanyListComponent,ReferalSourceChartComponent, RevenueBreakdownChartComponent],
  exports: [
    MainComponent
  ],
  entryComponents: [
    CompanyListComponent,
    ReferalSourceChartComponent
  ]
})
export class DashboardModule { }
