import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  model: any = {};
  isLoginError : boolean = false;
  constructor(private authService : AuthService,private router : Router) { }

  ngOnInit() {
  }
  
  OnSubmit(){
    this.authService.userAuthentication(this.model.username,this.model.password).subscribe((data : any)=>{
      this.authService.setToken(data);   
      this.router.navigate(['/layout']);
   },
   (err : HttpErrorResponse)=>{
     this.isLoginError = true;
     this.router.navigate(['/layout']);
   });
 }
}
