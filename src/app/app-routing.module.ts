import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IceCremComponent } from './com/ice-crem/ice-crem.component';
import { ChocoladComponent } from './com/chocolad/chocolad.component';
import { IsrealComponent } from './com/isreal/isreal.component';
import { ShukiService } from './dervices/gurds/shuki.service';
import { UsersComponent } from './com/users/users.component';


const routes: Routes = [
  { path:'ice-cream' , component:  IceCremComponent,
    canActivate:[ShukiService] },
  { path:'chocolate' , component: ChocoladComponent },
  { path:'user/:id' , component: UsersComponent},
  
  { path:'isreal' ,
   component: IsrealComponent,
   data:{title:' hi isreal harav'} },
   

   {path:'',redirectTo: '/chocolate', pathMatch:'full'},
   {path:'**',redirectTo:'/ice-cream' , pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
