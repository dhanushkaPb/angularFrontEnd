import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GradeClassService } from 'src/app/services/grade-class.service';
import { NotificationService } from 'src/app/services/notification.service';
import { DeleteConfirmationComponent } from 'src/app/shared/delete-confirmation/delete-confirmation.component';

@Component({
  selector: 'app-grade-creation',
  templateUrl: './grade-creation.component.html',
  styleUrls: ['./grade-creation.component.scss']
})
export class GradeCreationComponent implements OnInit {

  studentFormGradegroup;

  public btnTextChange = "Save"
  public gradeList: Array<any> = [];
  public classList: Array<any> = [];


  public show = false;
  constructor(private formbuilder: FormBuilder,
    private gradeclassservice: GradeClassService,
    private notifications: NotificationService,
    private modalService: NgbModal,) { }

  ngOnInit(): void {
    this.setGradeForm();
    this.loadGradeListTable();
    this.loadClassListTable();

    
  }

  setGradeForm() {
    this.studentFormGradegroup = this.formbuilder.group({
      gradenameCtrl: [null],
      classnameCtrl: [null]
    })

  }

  cancelForm() {

  }

  saveData() {

    let grade = this.studentFormGradegroup.controls['gradenameCtrl'].value;
    let classes = this.studentFormGradegroup.controls['classnameCtrl'].value;

    let gradelist = {

      grade_name: this.studentFormGradegroup.controls['gradenameCtrl'].value
    }

    let clasList = {

      class_name: this.studentFormGradegroup.controls['classnameCtrl'].value
    }

    if (grade !== null) {
console.log(grade);

      this.gradeclassservice.saveGrade(gradelist).subscribe((res) => {
        this.notifications.showSuccess();
        this.studentFormGradegroup.reset();
        this.loadGradeListTable();
        // this.getStudentList();

      }, (err) => {
        this.notifications.showError();
      });

    } else if (classes !== null) {

      alert("here");
      this.gradeclassservice.saveClass(clasList).subscribe((res) => {
        this.notifications.showSuccess();
        this.studentFormGradegroup.reset();
        this.loadClassListTable();
        // this.getStudentList();

      }, (err) => {
        this.notifications.showError();
      });

    } else {
      this.notifications.GradeClass();
    }

  }

  deleteGrade(data) {
 
    const modalRef = this.modalService.open(DeleteConfirmationComponent);
    modalRef.result.then(data => { }, (result) => {
      if (result) {  
        this.gradeclassservice.deleteGrade(data).subscribe((res) => {
          this.notifications.showDeleteSuccess();
          // this.studentFormGroup.reset();
          this.loadGradeListTable();

        }, (err) => {
          this.notifications.showErrorDelete();
        });
      }
    });

  }

  deleteClass(data) {
 
    const modalRef = this.modalService.open(DeleteConfirmationComponent);
    modalRef.result.then(data => { }, (result) => {
      if (result) {
        this.gradeclassservice.deleteClases(data).subscribe((res) => {
          this.notifications.showDeleteSuccess();
          // this.studentFormGroup.reset();
          this.loadClassListTable();

        }, (err) => {
          this.notifications.showErrorDelete();
        });
      }
    });
  }

  loadGradeListTable() {

    this.gradeclassservice.getGrade().subscribe((res) => {
      this.gradeList = res;
      this.notifications.showSuccessTable();
    })

  }

  loadClassListTable() {

    this.gradeclassservice.getClasses().subscribe((res) => {
      this.classList = res;
      this.notifications.showSuccessTable();
    })


  }

  changeToggle(data) {

    if (data.target.checked == true) {
      this.studentFormGradegroup.controls['gradenameCtrl'].disable();
      this.studentFormGradegroup.controls['classnameCtrl'].enable();

    } else {
      this.studentFormGradegroup.controls['classnameCtrl'].disable();
      this.studentFormGradegroup.controls['gradenameCtrl'].enable();

    }



  }


  




}
