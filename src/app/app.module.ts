import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FarmerRegComponent } from './farmer-reg/farmer-reg.component';
import { BidderRegComponent } from './bidder-reg/bidder-reg.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FarmerRegComponent,
    BidderRegComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
