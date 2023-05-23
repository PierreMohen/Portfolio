import { Component } from '@angular/core';

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.scss']
})
export class Section2Component {

  isActive: boolean = false
  switchActive() {
    console.log("toto")
    this.isActive = !this.isActive
  }
}
