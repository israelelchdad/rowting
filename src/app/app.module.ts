import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChocoladComponent } from './com/chocolad/chocolad.component';
import { IceCremComponent } from './com/ice-crem/ice-crem.component';
import { IsrealComponent } from './com/isreal/isreal.component';
import { UsersComponent } from './com/users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './com/login/login.component';
import { ChepComponent } from './comps/chep/chep.component';
import { BlackchepComponent } from './comps/blackchep/blackchep.component';
import { WhitechepComponent } from './comps/whitechep/whitechep.component';
import { BlucheepComponent } from './comps/blucheep/blucheep.component';
import { TableComponent } from './comps/table/table.component';
import { YearPipe } from './pips/year.pipe';
import { DddddDirective } from './dirictivs/ddddd.directive';

@NgModule({
  declarations: [
    AppComponent,
    ChocoladComponent,
    IceCremComponent,
    IsrealComponent,
    UsersComponent,
    LoginComponent,
    ChepComponent,
    BlackchepComponent,
    WhitechepComponent,
    BlucheepComponent,
    TableComponent,
    YearPipe,
    DddddDirective
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
