import { Component, OnInit, ElementRef, HostListener,AfterViewInit, Renderer2 } from '@angular/core';
import { faTv,faGamepad,faFutbolBall,faBasketball,faMusic,faCoffee,faCake } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.scss']
})
export class Section1Component implements OnInit,AfterViewInit {

  tv = faTv;
  Game = faGamepad; 
  music = faMusic;
  foot = faFutbolBall;
  basket = faBasketball;
  drink = faCoffee;
  cake = faCake;

  constructor(private el: ElementRef,private renderer: Renderer2) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.generateStars();
  }

  generateStars() {
    let count = 500;
    let scene = this.el.nativeElement.querySelector('.scene');

    for (let i = 0; i < count; i++) {
      let star = this.renderer.createElement('i');
      let x = Math.floor(Math.random() * window.innerWidth);
      let y = Math.floor(Math.random() * window.innerHeight);
      let duration = Math.random() * 10;
      let size = Math.random() * 2;

      this.renderer.setStyle(star, 'left', x + 'px');
      this.renderer.setStyle(star, 'top', y + 'px');
      this.renderer.setStyle(star, 'width', 1 + size + 'px');
      this.renderer.setStyle(star, 'height', 1 + size + 'px');
      this.renderer.setStyle(star, 'animation-duration', 5 + duration + 's');
      this.renderer.setStyle(star, 'animation-delay', duration + 's');
      this.renderer.appendChild(scene, star);
    }
  }

  isHovered: boolean = false;

  @HostListener('mouseenter') onMouseEnter() {
    this.isHovered = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.isHovered = false;
  }
}
