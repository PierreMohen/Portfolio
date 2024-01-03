import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-section5',
  templateUrl: './section5.component.html',
  styleUrls: ['./section5.component.scss']
})
export class Section5Component {
  gridItemCount: number = 500;
  gridItems: number[] = new Array(this.gridItemCount).fill(0).map((_, index) => index);

  // --------------------hover--------------------------
  isHovered: boolean = false;

  @HostListener('mouseenter') onMouseEnter() {
    this.isHovered = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.isHovered = false;
  }
  isActive: boolean = false

  
}
