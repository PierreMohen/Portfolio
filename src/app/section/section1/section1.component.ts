import { Component, OnInit, Renderer2, ElementRef, AfterViewInit,HostListener } from '@angular/core';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.scss']
})
export class Section1Component implements OnInit, AfterViewInit {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.generateStars();
  }

  generateStars() {
    let count = 500;
    let scene = this.el.nativeElement.querySelector('.scene');
    let i = 0;
    while (i < count) {
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
      i++;
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
