import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '@angular/material';
import { AppComponent } from './app.component';
import 'hammerjs';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MaterialModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
