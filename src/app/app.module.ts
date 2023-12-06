import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { Test1Component } from './test1/test1.component';

import { provideAuth,getAuth } from '@angular/fire/auth';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';

import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { LabsComponent } from './pages/labs/labs.component';
import { HeaderComponent } from './commons/header/header.component';

const config = {
  apiKey: "AIzaSyDmQW0y94kM2f9s8s-YHIa5FCLlc1v47KY",
  authDomain: "apirest-bc083.firebaseapp.com",
  databaseURL: "https://apirest-bc083-default-rtdb.firebaseio.com",
  projectId: "apirest-bc083",
  storageBucket: "apirest-bc083.appspot.com",
  messagingSenderId: "263020042066",
  appId: "1:263020042066:web:31eee5662a14fcede80c8b",
  measurementId: "G-9L7JJLK4SX"
};


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Test1Component,
    RegisterComponent,
    LoginComponent,
    LabsComponent,
    HeaderComponent,
    
  ],
  imports: [
    BrowserModule,
    provideFirebaseApp(() => initializeApp(config)),
    provideAuth(() => getAuth()), 
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }