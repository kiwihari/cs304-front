import { BrowserModule } from '@angular/platform-browser';
import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import {HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { HomeComponent } from './home/home.component';
import { PageComponent } from './page/page.component'
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {routing} from './app.routes';
import { NavbarComponent } from './navbar/navbar.component';
import { Page2Component } from './page2/page2.component';
import { LocationComponent } from './location/location.component';
import { GooglemapsComponent } from './googlemaps/googlemaps.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageComponent,
    NavbarComponent,
    Page2Component,
    LocationComponent,
    GooglemapsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    FormsModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
