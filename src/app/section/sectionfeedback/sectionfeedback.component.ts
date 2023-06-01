import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hireme',
  templateUrl: './Sectionfeedback.component.html',
  styleUrls: ['./hireme.component.scss']
})
export class SectionfeedbackComponent implements OnInit {
  images: string[] = [
    '../../../assets/pictures/wallpaperflare.com_wallpaper (1).jpg',
    '../../../assets/pictures/wallpaperflare.com_wallpaper (2).jpg',
    '../../../assets/pictures/wallpaperflare.com_wallpaper.jpg'
  ];
  currentIndex = 0;
  interval: any;

  ngOnInit() {
    this.startSlider();
  }

  startSlider() {
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  pauseSlider() {
    clearInterval(this.interval);
  }

  previousSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }
}
//   currentIndex: number = 0;

//   ngOnInit() {
//     setInterval(() => {
//       this.currentIndex = (this.currentIndex + 1) % this.images.length;
//     }, 5000); // Adjust the interval duration (in milliseconds) as needed
//   }
// }