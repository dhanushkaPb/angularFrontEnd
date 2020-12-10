import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentRegisterComponent } from './student-register/student-register.component';
import { GradeCreationComponent } from './grade-creation/grade-creation.component';

const routes: Routes = [
  {
    path:"",
    children:[{
      path:"student-register",
      component:StudentRegisterComponent,
    }],

    

  },

  {
    path:"",
    children:[{
      path:"grade-creation",
      component:GradeCreationComponent,
    }],

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
