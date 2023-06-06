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
 
    isMenuBarVisible: boolean = false;

    @HostListener('window:scroll', [])
    onWindowScroll() {
      this.isMenuBarVisible = window.pageYOffset > 0;
}

}
