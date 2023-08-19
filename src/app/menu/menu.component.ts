import { Component, HostListener } from '@angular/core';
import { Pipe ,PipeTransform } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  menu=[

    {
      name:'home',url:'#home'
    },
    {
      name:'about me', url:'#section1'
    },
    {
      name:'works', url:'#section3'
    },
    {
      name:'contact me', url:'#footer'
    },
    
    
    ];

    isMenuVisible = false;
  isMobileScreen = false;

  // Function to toggle the menu state
  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }

  // Use HostListener to track window resize and update isMobileScreen
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMobileScreen = window.innerWidth < 900;
    // Show the entire menu when the screen width is greater than 800 pixels
    this.isMenuVisible = window.innerWidth >= 900;
  }

  // Initialize isMobileScreen and isMenuVisible based on initial window width
  constructor() {
    this.isMobileScreen = window.innerWidth < 900;
    this.isMenuVisible = window.innerWidth >= 900;
  }
}
