import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FarmerRegComponent } from './farmer-reg/farmer-reg.component';
import { BidderRegComponent } from './bidder-reg/bidder-reg.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'farmer-reg',component:FarmerRegComponent},
  {path:'bidder-reg',component:BidderRegComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
