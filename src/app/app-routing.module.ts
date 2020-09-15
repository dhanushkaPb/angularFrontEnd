import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { StudentRegisterComponent } from './dashboard/student-register/student-register.component';
import { ContentComponentComponent } from './content-component/content-component.component';
import { DeleteConfirmationComponent } from './shared/delete-confirmation/delete-confirmation.component';


const routes: Routes = [
  {
    path: '', component: ContentComponentComponent
  },
  {
    path: 'dashboard',
    // component: StudentRegisterComponent
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'myModal', component: DeleteConfirmationComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
