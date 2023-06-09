import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { Section1Component } from './section/section1/section1.component';
import { Section2Component } from './section/section2/section2.component';
import { Section3Component } from './section/section3/section3.component';
import { SectionfeedbackComponent } from './section/sectionfeedback/sectionfeedback.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const routes: Routes = [
  { path: 'home', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'section1', component: Section1Component },
  { path: 'section2', component: Section2Component },
  { path: 'section3', component: Section3Component },
  { path: 'hireme', component: SectionfeedbackComponent },
  { path: 'footer', component: FooterComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  BrowserAnimationsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
