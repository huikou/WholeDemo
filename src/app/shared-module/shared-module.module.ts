import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanySetupComponent } from './company-setup/company-setup.component';
import { UserService } from '../shared/user.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CompanySetupComponent],
  exports: [CompanySetupComponent]
})
export class SharedModuleModule {
  static forRoot(){
    return {
      ngModule: SharedModuleModule,
      providers:[UserService]
    }
  }
 }
