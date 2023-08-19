import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { Section1Component } from './section/section1/section1.component';
import { Section2Component } from './section/section2/section2.component';
import { Section3Component } from './section/section3/section3.component';
import { Section4Component } from './section/section4/section4.component';
import { Section5Component } from './section/section5/section5.component';
import { NgxHideOnScrollModule } from 'ngx-hide-on-scroll';
import { CapitalizeFirstLetterArrayPipe } from './pipes/capitalize-first-letter-array.pipe';
import { HttpClientModule } from '@angular/common/http';
import { ColorComponent } from './components/color/color.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ScrollToModule } from 'ngx-scroll-to';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
library.add(faCoffee);

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    Section1Component,
    Section2Component,
    Section3Component,
    Section4Component,
    CapitalizeFirstLetterArrayPipe,
    ColorComponent,
    FooterComponent,
    Section5Component,
  
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxHideOnScrollModule,
    HttpClientModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
