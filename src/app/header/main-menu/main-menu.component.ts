import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css'
})
export class MainMenuComponent {
  constructor(private router:Router){}
  mainMenuArray = [
    { name: 'Home', route: '/' },
    { name: 'Categories', route: '/Categories' },
    { name: 'Discounts', route: '/Discounts' },
    { name: 'About', route: '/About' },
    { name: 'Contact', route: '/Contact' }
  ];

 hoveredMenu:any | null = null

 onClick(menu: any | null){
  this.router.navigate([menu])
  this.hoveredMenu = menu;
 }

 onLeave(){
  this.hoveredMenu = null;
 }
}
