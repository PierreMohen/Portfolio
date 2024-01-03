import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { DesignlayoutComponent } from './designlayout/designlayout.component';
import { Section1Component } from './section/section1/section1.component';
import { Section2Component } from './section/section2/section2.component';
import { Section3Component } from './section/section3/section3.component';
import { Section4Component } from './section/section4/section4.component';
import { Section5Component } from './section/section5/section5.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxHideOnScrollModule } from 'ngx-hide-on-scroll';



const routes: Routes = [
  { path: 'home', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'section1', component: Section1Component },
  { path: 'section2', component: Section2Component },
  { path: 'section3', component: Section3Component },
  { path: 'section4', component: Section4Component },
  { path: 'section5', component: Section5Component },
  { path: 'footer', component: FooterComponent },
  { path: 'designlayout', component: DesignlayoutComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  BrowserAnimationsModule,
  NgxHideOnScrollModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
