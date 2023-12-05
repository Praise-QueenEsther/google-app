// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { AngularFireModule } from '@angular/fire/compat'
// import { AngularFireAuthModule } from "@angular/fire/compat/auth";

// import { firebaseConfig } from 'src/environment/firebaseConfig';
// import { SignupPageComponent } from './signup-page/signup-page.component';
// import { HomePageComponent } from './home-page/home-page.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     SignupPageComponent,
//     HomePageComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     AngularFireAuthModule,
//     AngularFireModule.initializeApp(firebaseConfig),
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';


import { firebaseConfig } from '../environments/firebaseConfig'; 
// import { firebaseConfig } from 'src/environment/firebaseConfig';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
