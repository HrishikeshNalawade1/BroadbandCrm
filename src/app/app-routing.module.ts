import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeComponent } from './employe/employe.component';

import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { LeadDemoComponent } from './lead-demo/lead-demo.component';


const routes: Routes = [{path:"",component:LoginComponent},
{path:"admin",component:AdminComponent},
{path:"Lead",component:LeadDemoComponent},
{path:"Employe",component:EmployeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
