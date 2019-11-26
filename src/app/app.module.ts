import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChocoladComponent } from './com/chocolad/chocolad.component';
import { IceCremComponent } from './com/ice-crem/ice-crem.component';
import { IsrealComponent } from './com/isreal/isreal.component';
import { UsersComponent } from './com/users/users.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ChocoladComponent,
    IceCremComponent,
    IsrealComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
