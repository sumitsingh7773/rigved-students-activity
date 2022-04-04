import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { DemoComponent } from './demo.component';
@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [DemoComponent]
})
export class AppModule { }
