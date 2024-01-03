import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  
  // isSticky: boolean = false;

  // @HostListener('window:scroll', ['$event'])
  // handleScroll() {
  //   // Check the scroll position and toggle the 'sticky' class accordingly
  //   if (window.pageYOffset > 100) { // Adjust this value as needed
  //     this.isSticky = true;
  //   } else {
  //     this.isSticky = false;
  //   }
  // }
}
