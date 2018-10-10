import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
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
  constructor(private userService : UserService,private router : Router) { }

  ngOnInit() {
  }
  
  OnSubmit(){
    this.userService.userAuthentication(this.model.username,this.model.password).subscribe((data : any)=>{
     localStorage.setItem('userToken',data.access_token);
     const time_to_login = Date.now() + 604800000;
     localStorage.setItem('timer', JSON.stringify(time_to_login));
     this.router.navigate(['/layout']);
   },
   (err : HttpErrorResponse)=>{
     this.isLoginError = true;
   });
 }
}
