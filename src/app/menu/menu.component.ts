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
      name:'works', url:'#section3'
    },
    {
      name:'about me', url:'#section2'
    },
    {
      name:'contact me', url:'#section1'
    },
    
    
    ];
 

}



