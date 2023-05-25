import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { Section1Component } from './section/section1/section1.component';
import { Section2Component } from './section/section2/section2.component';
import { Section3Component } from './section/section3/section3.component';
import { NgxHideOnScrollModule } from 'ngx-hide-on-scroll';
import { CapitalizeFirstLetterArrayPipe } from './pipes/capitalize-first-letter-array.pipe';
import { HttpClientModule } from '@angular/common/http';
import { ColorComponent } from './components/color/color.component';
import { HiremeComponent } from './section/hireme/hireme.component';
import { FooterComponent } from './footer/footer.component';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    Section1Component,
    Section2Component,
    Section3Component,
    CapitalizeFirstLetterArrayPipe,
    ColorComponent,
    HiremeComponent,
    FooterComponent,  
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxHideOnScrollModule,
    HttpClientModule,    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
