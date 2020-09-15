import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRegisterComponent } from './student-register/student-register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { ModalModule } from 'ngb-modal';


@NgModule({
  declarations: [
   
    StudentRegisterComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    DashboardRoutingModule,
    TranslateModule,
    ModalModule,
    
  ]
})
export class DashboardModule {

 }
