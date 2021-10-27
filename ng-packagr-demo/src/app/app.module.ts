import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SuperLibModule } from 'super-lib/public_api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SuperLibModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
