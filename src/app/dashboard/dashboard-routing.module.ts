import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentRegisterComponent } from './student-register/student-register.component';

const routes: Routes = [
  {
    path:"",
    children:[{
      path:"student-register",
      component:StudentRegisterComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
