import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomPipe } from './user-demo/user-pipe.component';

import { FirstComponent } from './first/first.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { StructuralDemoComponent } from './structural-demo/structural-demo.component';
import { EmployeeDemoComponent } from './employee-demo/employee-demo.component';


import { UserDemoComponent } from './user-demo/user-demo.component';



@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    PipeDemoComponent,
    CustomPipe,
    StructuralDemoComponent,
    EmployeeDemoComponent,
    UserDemoComponent,
    
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }