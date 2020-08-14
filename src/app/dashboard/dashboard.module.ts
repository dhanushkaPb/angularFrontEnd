import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRegisterComponent } from './student-register/student-register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
   
    StudentRegisterComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    DashboardRoutingModule,
    TranslateModule
    
  ]
})
export class DashboardModule {

 }
