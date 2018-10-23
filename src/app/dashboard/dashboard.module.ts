import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { ReferalSourceChartComponent } from './main/referal-source-chart/referal-source-chart.component';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import {NgbModule, NgbActiveModal, NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import { FullCalendarModule } from 'ng-fullcalendar';
import { RevenueBreakdownChartComponent } from './main/revenue-breakdown-chart/revenue-breakdown-chart.component';
import { CompanyCalendarComponent } from './company-calendar/company-calendar.component';
import { FullCalendarComponent } from './full-calendar/full-calendar.component';
@NgModule({
  imports: [
    CommonModule,
    ChartsModule,
    FormsModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    FullCalendarModule,
  ],
  declarations: [MainComponent, CompanyListComponent,ReferalSourceChartComponent, RevenueBreakdownChartComponent, CompanyCalendarComponent, FullCalendarComponent],
  exports: [
    MainComponent
  ],
  entryComponents: [
    CompanyListComponent,
    ReferalSourceChartComponent
  ]
})
export class DashboardModule { }
