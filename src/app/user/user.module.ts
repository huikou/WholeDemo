import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import {AppMaterialModule} from '../shared-module/app-material/app-material.module';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AppRoutingModule } from '..//app-routing.module';
import { MatFormFieldModule, MatSelectModule, MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AppMaterialModule,
    // MatFormFieldModule,
    // MatSelectModule,
    MatInputModule
  ],
  declarations: [UserComponent, SignInComponent, SignUpComponent],
  exports: [
    UserComponent
  ]
})
export class UserModule { }
