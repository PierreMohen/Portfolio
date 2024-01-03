import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { faTv,faGamepad,faFutbolBall,faBasketball,faMusic,faCoffee,faCake,faSmile,faLemon,faBookOpen,faLightbulb,faCloudMoonRain } from '@fortawesome/free-solid-svg-icons';
import { Component } from '@angular/core';

@Component({
  selector: 'app-section4',
  templateUrl: './section4.component.html',
  styleUrls: ['./section4.component.scss'],
})
export class Section4Component {
  isHovered: boolean = false;

  book = faBookOpen;
  bulb = faLightbulb;
  cloudmr = faCloudMoonRain;

  onMouseEnter() {
    this.isHovered = true;
  }

  onMouseLeave() {
    this.isHovered = false;
  }
}
