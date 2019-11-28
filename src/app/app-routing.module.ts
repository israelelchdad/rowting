import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IceCremComponent } from './com/ice-crem/ice-crem.component';
import { ChocoladComponent } from './com/chocolad/chocolad.component';
import { IsrealComponent } from './com/isreal/isreal.component';
import { ShukiService } from './dervices/gurds/shuki.service';
import { UsersComponent } from './com/users/users.component';
import { LoginComponent } from './com/login/login.component';
import { ChepComponent } from './comps/chep/chep.component';
import { BlackchepComponent } from './comps/blackchep/blackchep.component';
import { WhitechepComponent } from './comps/whitechep/whitechep.component';
import { BlucheepComponent } from './comps/blucheep/blucheep.component';
import { TableComponent } from './comps/table/table.component';


const routes: Routes = [
  { path:'ice-cream' , component:  IceCremComponent,
    canActivate:[ShukiService] },
  { path:'chocolate' , component: ChocoladComponent },
  { path:'login' , component:  LoginComponent},
  { path:'user/:id' , component: UsersComponent},
 
  { path:'isreal' ,
   component: IsrealComponent,
   data:{title:' hi isreal harav'} },
   { path:'table' , component:   TableComponent},


   { path:'chep' , component:  ChepComponent,
      children : [
        { path:'black' , component:BlackchepComponent },
        { path:'blu' , component: BlucheepComponent  },
        { path:'white' , component: WhitechepComponent},
        { path:'' , component:BlackchepComponent },

      ] },

   

   {path:'',redirectTo: '/chocolate', pathMatch:'full'},
   {path:'**',redirectTo:'/ice-cream' , pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
