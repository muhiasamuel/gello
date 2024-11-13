import { Component } from '@angular/core';
import { ServiceService } from '../../Services/service.service';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrl: './top-menu.component.css'
})
export class TopMenuComponent {
isLoggedIn = false;

constructor(  public authService:AuthService){}

login() {
  this.isLoggedIn = true;
}

logout() {
  this.authService.logout();
  this.isLoggedIn = false;
  
  // Optionally, add any additional logic here, like redirecting to a home page
}
}
