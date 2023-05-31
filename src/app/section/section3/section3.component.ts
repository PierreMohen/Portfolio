import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/Services/customer.service';

@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.scss']
})

export class Section3Component implements OnInit{

  constructor(private readonly _customer:CustomerService){}

  menu: { name: string; bouton: string; open:boolean }[] =[

    {name:'home', bouton:'button1', open:false},
    {name:'login', bouton:'button2', open:false},
    {name:'city',  bouton:'button3', open:false},
    {name:'cars', bouton:'button4', open:false},
  
  ];

  icon=['icon1'];
  submenu=['item1','item2','item3'];

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
    
  }
