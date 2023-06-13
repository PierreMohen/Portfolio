import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/Services/customer.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { faCoffee,faEnvelope,faMobilePhone,faPhone,faUser,faLock } from '@fortawesome/free-solid-svg-icons';

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

export class Section3Component implements OnInit{

  mail = faEnvelope;
  password = faLock;
  constructor(private readonly _customer:CustomerService){}
  divs = [
    { id: 1, state: 'start' },
    { id: 2, state: 'start' },
    { id: 3, state: 'start' },
    { id: 4, state: 'start' }
  ];

  startAnimation(div: any) {
    div.state = 'end';
  }
  
  menu: { id:number; name: string; button: string; state:string }[] =[
    
    { id: 1 , name:'home', button:'button1',state:'start' },
    { id: 2 , name:'login', button:'button2',state:'start' },
    { id: 3 , name:'city',  button:'button3',state:'start' },
    { id: 4 , name:'cars', button:'button4',state:'start' },
    
  ];


  selectedButton: string = '';

  
  
  selectButton(buttonName: string) {
    this.selectedButton = buttonName;
  }
  
  donnees:any[]=[];
  ngOnInit(): void {
  
    this._customer.getDonnees().subscribe(data => {
         this.donnees = data;
     
      });
  }
  toggleAnimation(menuItem: any) {
    for (const item of this.menu) {
      if (item === menuItem) {
        item.state = item.state === 'start' ? 'end' : 'start';
      } else {
        item.state = 'start';
      }
    }
  }
}
