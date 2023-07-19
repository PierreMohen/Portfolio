import { Component } from '@angular/core';
import { faCoffee,faEnvelope,faMobilePhone,faPhone,faUser,faPlay } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  icon = faCoffee;
  mail = faEnvelope;
  phone = faMobilePhone;
  phone1 = faPhone;
  user  = faUser;
  play =faPlay;
}
