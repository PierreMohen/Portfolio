import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

import { CustomerService } from 'src/app/Services/customer.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.scss'],
  animations: [
    trigger('slideAnimation', [
      state('start', style({ transform: 'translateX(-100%)', opacity: 0 })),
      state('end', style({ transform: 'translateX(0)', opacity: 1 })),
      transition('start => end', animate('500ms ease-out')),
      transition('end => start', animate('500ms ease-out'))
    ])
  ]
})

export class Section3Component implements OnInit {
  @ViewChild('sectionElement', { read: ElementRef }) section!: ElementRef;

  mail = faEnvelope;
  password = faLock;
  
  divs = [
    { id: 1, state: 'start' },
    { id: 2, state: 'start' },
    { id: 3, state: 'start' },
    { id: 4, state: 'start' }
  ];

  menu: { id:number; name: string; button: string; state:string }[] = [
    { id: 1 , name:'home', button:'button1',state:'start' },
    { id: 2 , name:'login', button:'button2',state:'start' },
    { id: 3 , name:'city',  button:'button3',state:'start' },
    { id: 4 , name:'cars', button:'button4',state:'start' },
  ];

  selectedButton: string = '';
  donnees: any[] = [];

  constructor(private readonly _customer: CustomerService, private renderer: Renderer2) {}

  ngOnInit(): void {
    this._customer.getDonnees().subscribe(data => {
      this.donnees = data;
    });

    const options = {
      root: null, // use the viewport as the root
      rootMargin: '0px', // no margin
      threshold: 0.5 // 50% intersection
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.renderer.addClass(entry.target, 'section');
          } else {
            this.renderer.removeClass(entry.target, 'section');
          }
        });
      },
      options
    );

    observer.observe(this.section.nativeElement);
  }

  toggleAnimation(menuItem: any) {
    for (const item of this.menu) {
      if (item === menuItem) {
        item.state = item.state === 'start' ? 'end' : 'start';
      } else {
        item.state = 'start';
      }
    }
  
    for (const div of this.divs) {
      if (div.id === menuItem.id) {
        div.state = div.state === 'start' ? 'end' : 'start';
      } else {
        div.state = 'start';
      }
    }
  }
}
