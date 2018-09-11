import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private auth: AuthService) { }
    navbarOpen = false;
  
    toggleNavbar() {
      this.navbarOpen = !this.navbarOpen;
    }
    
    ngOnInit() {
    }

    isLoggedIn() {
      return this.auth.isLoggedIn();
    }
  
    logout(){
      this.auth.logout();
    }
}
