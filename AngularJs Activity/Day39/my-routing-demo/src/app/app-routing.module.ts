import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SuccessComponent } from './success/success.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './search/search.component';
import { ListComponent } from './list/list.component';
import { DeleteComponent } from './delete/delete.component';

const routes: Routes = [
  { path: "", component: SearchComponent },
  { path: "search", component: SearchComponent },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  {
    path: "success/:name", component: SuccessComponent, children: [
      {
        path: "dashboard", component: DashboardComponent, children: [
          { path: "", component: DeleteComponent },
          { path: "delete", component: DeleteComponent }
        ]
      },
      { path: "list", component: ListComponent },
      { path: "about", component: ListComponent }
    
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }