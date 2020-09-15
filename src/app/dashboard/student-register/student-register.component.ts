import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { StudentService } from '../../services/student.service';
import { NotificationService } from 'src/app/services/notification.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteConfirmationComponent } from 'src/app/shared/delete-confirmation/delete-confirmation.component';


@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.scss']
})
export class StudentRegisterComponent implements OnInit {
  @ViewChild('myModal') myModal;
  private modalRef;

  studentFormGroup;

  public btnTextChange = "Save"

  public data;

  public IdByEdit;

  public studentlist = []

  public studentListTable = []

  constructor(private studentservice: StudentService,
     private formbuilder: FormBuilder, 
     private notifications: NotificationService,
     private modalService: NgbModal,

  ) { }

  ngOnInit(): void {

    this.setForm();
    this.getStudentList();
  }

  setForm() {
    this.studentFormGroup = this.formbuilder.group({
      nameCtrl: '',
      addressCtrl: '',
      contactCtrl: '',
      lastnameCtrl: '',
      gradeCtrl: '',
      classCtrl: ''
   

    })
  }

  cancelForm() {

      this.studentFormGroup.reset();
      this.btnTextChange = "Save"

  }

  saveData() {

    if (this.studentlist) {

      let Formlist = {
        first_name: this.studentFormGroup.controls['nameCtrl'].value,
        address: this.studentFormGroup.controls['addressCtrl'].value,
        contact: this.studentFormGroup.controls['contactCtrl'].value,
        st_grade: this.studentFormGroup.controls['gradeCtrl'].value,
        st_class: this.studentFormGroup.controls['classCtrl'].value,
        last_name: this.studentFormGroup.controls['lastnameCtrl'].value,

      }

   
    
      
      this.studentservice.saveStudent(Formlist).subscribe((res) => {
        this.notifications.showSuccess();
        this.studentFormGroup.reset();
        this.getStudentList();

      }, (err) => {
        this.notifications.showError();
      });
    } else {



      let updateFormList = {

        id: this.IdByEdit,
        first_name: this.studentFormGroup.controls['nameCtrl'].value,
        address: this.studentFormGroup.controls['addressCtrl'].value,
        contact: this.studentFormGroup.controls['contactCtrl'].value,
        st_grade: this.studentFormGroup.controls['gradeCtrl'].value,
        st_class: this.studentFormGroup.controls['classCtrl'].value,
        last_name: this.studentFormGroup.controls['lastnameCtrl'].value,

      }
      this.studentservice.updateStudent(updateFormList, updateFormList.id).subscribe((res) => {
        this.notifications.showUpdateSuccess();
        this.studentFormGroup.reset();
        this.getStudentList();

      }, (err) => {
        this.notifications.showUpdateError();
      });
    }



  }

  getStudentList() {
    this.studentservice.getStudent().subscribe((res) => {
      this.notifications.showSuccessTable();
      this.studentListTable = res;
    }, (err) => {
      this.notifications.showaWarningTable();
    });
  }

  openEditDialog(data) {
    if (data != "") {
      this.btnTextChange = "Update"
    } else {
      this.btnTextChange = "Save"
    }

    this.IdByEdit = data.id

    this.studentFormGroup.controls['nameCtrl'].setValue(data.name);
    this.studentFormGroup.controls['addressCtrl'].setValue(data.address);
    this.studentFormGroup.controls['contactCtrl'].setValue(data.contact);

  }

  openDeleteDialog(data) {

    const modalRef = this.modalService.open(DeleteConfirmationComponent);
    modalRef.result.then(data => { }, (result) => {
    if (result) {
    this.studentservice.deleteStudent(data.id).subscribe((res) => {
      this.notifications.showDeleteSuccess();
      this.studentFormGroup.reset();
      this.getStudentList();

    }, (err) => {
      this.notifications.showErrorDelete();
    });
  }
});
}

}
