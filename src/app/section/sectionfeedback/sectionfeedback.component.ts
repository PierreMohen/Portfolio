import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hireme',
  templateUrl: './Sectionfeedback.component.html',
  styleUrls: ['./hireme.component.scss']
})
export class SectionfeedbackComponent implements OnInit {
  images: string[] = [
    '../../../assets/wallpaperflare.com_wallpaper (1).jpg',
    '../../../assets/wallpaperflare.com_wallpaper (2).jpg',
    '../../../assets/wallpaperflare.com_wallpaper.jpg'
  ];
  currentIndex: number = 0;

  ngOnInit() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 5000); // Adjust the interval duration (in milliseconds) as needed
  }
}
