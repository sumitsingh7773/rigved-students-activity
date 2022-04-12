import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FormControlDemoComponent } from './form-control-demo/form-control-demo.component';
import { FormGroupDemoComponent } from './form-group-demo/form-group-demo.component';
import { BuilderDemoComponent } from './builder-demo/builder-demo.component';
import { activity1Component } from './activity1/activity1.component';
import { Activity2Component } from './activity2/activity2.component';

@NgModule({
  declarations: [
    AppComponent,
    FormControlDemoComponent,
    FormGroupDemoComponent,
    BuilderDemoComponent,
    activity1Component,
    Activity2Component
    
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }