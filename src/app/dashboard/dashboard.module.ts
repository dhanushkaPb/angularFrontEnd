import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRegisterComponent } from './student-register/student-register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { ModalModule } from 'ngb-modal';
import { GradeCreationComponent } from './grade-creation/grade-creation.component';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
   
    StudentRegisterComponent,
   
    GradeCreationComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    DashboardRoutingModule,
    TranslateModule,
    ModalModule,
    NgSelectModule,
    FormsModule
    
  ]
})
export class DashboardModule {

 }
