import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CheckExtNoDirective } from './shared/check-ext-no.directive';
import { CheckEndDateDirective } from './shared/check-end-date.directive';


@NgModule({
  declarations: [
    AppComponent,
    CheckExtNoDirective,
    CheckEndDateDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
