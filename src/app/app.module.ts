import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule, NgbActiveModal, NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { UserModule } from './user/user.module';
import { UserService } from './shared/user.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { DisableIfUnauthorizedDirective } from './auth/disable-if-unauthorized.directive';
//import { CompanyModule } from './company/company.module';

@NgModule({
  declarations: [
    AppComponent,
    DisableIfUnauthorizedDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    NgbModalModule,
    ChartsModule,
    UiModule,
    DashboardModule,
    AppRoutingModule,
    UserModule
    // CompanyModule
  ],
  providers: [NgbActiveModal, UserService,AuthGuard,
    {
      provide : HTTP_INTERCEPTORS,
      useClass : AuthInterceptor,
      multi : true
    }],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
