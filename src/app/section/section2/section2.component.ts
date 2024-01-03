import { Component,HostListener,NgModule,ViewChild} from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.scss'],
  animations: [
    trigger('slideAnimation', [
      state('hidden', style({ transform: 'translateX(-100%)' })),
      state('visible', style({ transform: 'translateX(0)' })),
      transition('hidden <=> visible', animate('500ms ease-in-out')),
    ]),
  ],
  
})
export class Section2Component {

  @ViewChild('videoPlayer') videoPlayer: any;
  volume: number = 1; // Initial volume level

  updateVolume() {
    this.videoPlayer.nativeElement.volume = this.volume;
  }

  
  // -----------------------------------------

  divStates: { [key: string]: string } = {
    div1: 'hidden',
    div2: 'hidden',
  };

  toggleDiv(divKey: string) {
    for (const key in this.divStates) {
      if (key !== divKey) {
        this.divStates[key] = 'hidden';
      }
    }

    this.divStates[divKey] = this.divStates[divKey] === 'hidden' ? 'visible' : 'hidden';
  }

  buttons: string[] = ['Button 1', 'Button 2', 'Button 3', 'Button 4'];
  divVisibility: boolean[] = [false, false, false, false];

  showDiv(index: number) {
    // Hide all divs
    this.divVisibility = this.divVisibility.map(() => false);
    // Show the selected div
    this.divVisibility[index] = true;
  }
  isHovered: boolean = false;

  @HostListener('mouseenter') onMouseEnter() {
    this.isHovered = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.isHovered = false;
  }

  isActive: boolean = false
  
  toggleActive() {
    this.isActive = !this.isActive;
  }
  
  switchActive() {
    console.log("toto")
    this.isActive = !this.isActive
  }
}
  
  // buttons: any[] = [];
  // constructor() { }
  // ngOnInit(): void {
  //   this.buttons = [
  //     {
  //       id: 1,
  //       text: 'Button 1',
  //       divId: 'div1'
  //     },
  //     {
  //       id: 2,
  //       text: 'Button 2',
  //       divId: 'div2'
  //     },
  //     {
  //       id: 3,
  //       text: 'Button 3',
  //       divId: 'div3'
  //     },
  //     {
  //       id: 4,
  //       text: 'Button 4',
  //       divId: 'div4'
  //     }
  //   ];
  // }
  // handleClick(id: number) {
  //   console.log(`Button ${id} clicked`);
  // }

