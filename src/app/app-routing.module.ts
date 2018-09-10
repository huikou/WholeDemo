import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from './dashboard/dashboard.module';
import { MainComponent } from './dashboard/main/main.component';
import { UserComponent } from './user/user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { LayoutComponent } from './ui/layout/layout.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  { path : '', redirectTo:'/login', pathMatch : 'full'},
  { 
    path: 'layout', component: LayoutComponent ,
    children: [{path: 'dashboard', component: MainComponent, canActivate:[AuthGuard] },
               {path: '', redirectTo:'dashboard', pathMatch : 'full'}] 
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
