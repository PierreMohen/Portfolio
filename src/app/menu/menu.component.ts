import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  menu=['home','works','about me','contact me'];
  navbarfixed:boolean = false;
  @HostListener('window:scroll',['$event']) onscroll(){
    if(window.scrollY > 100){
      this.navbarfixed = true;
  }
  else{
    this.navbarfixed = false;
  }
}
}
