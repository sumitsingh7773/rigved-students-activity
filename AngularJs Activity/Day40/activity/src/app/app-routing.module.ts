import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SuccessComponent } from './success/success.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './search/search.component';
import { ListComponent } from './list/list.component';
import { DeleteComponent } from './delete/delete.component';
import { AboutComponent } from './about/about.component';
import { AuthenticGuard } from './authentic.guard';

const routes: Routes = [
  {path : "", component : LoginComponent},
  {path : "login", component : LoginComponent},
  {path : "register", component : RegisterComponent},
  {path : "success/:name/:pw", component: SuccessComponent, canActivate: [AuthenticGuard],  children: [
    {path: "", component : DashboardComponent},
    {path: "dashboard", component : DashboardComponent},
    {path: "list", component: ListComponent},
    {path : "search", component: SearchComponent,children:[
    {path : "", component: DeleteComponent},
    {path : "delete", component: DeleteComponent},
    {path : "about", component: AboutComponent}
   
  ]}
]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
