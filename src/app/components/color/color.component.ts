import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const closedface = document.querySelector('.closed');
    const openface = document.querySelector('.open');

    closedface?.addEventListener('click', () => {
      if (openface?.classList.contains('open')) {
        openface.classList.add('active');
        closedface.classList.remove('active');
      }
    });

    openface?.addEventListener('click', () => {
      if (closedface?.classList.contains('closed')) {
        closedface.classList.add('active');
        openface.classList.remove('active');
      }
    });
  }
}
