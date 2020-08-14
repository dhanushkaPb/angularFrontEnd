import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { StudentService } from '../../services/student.service';
import { NotificationService } from 'src/app/services/notification.service';


@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.scss']
})
export class StudentRegisterComponent implements OnInit {

  studentFormGroup;

  public btnTextChange = "Save"

  public data;

  public IdByEdit;

  public studentlist = []

  constructor(private studentservice: StudentService, private formbuilder: FormBuilder, private notifications: NotificationService,

  ) { }

  ngOnInit(): void {

    this.setForm();
    this.getStudentList();
  }

  setForm() {
    this.studentFormGroup = this.formbuilder.group({
      nameCtrl: '',
      addressCtrl: '',
      contactCtrl: ''
    })
  }

  cancelForm() {

  }

  saveData() {

    if (!this.studentlist) {

      let Formlist = {
        name: this.studentFormGroup.controls['nameCtrl'].value,
        address: this.studentFormGroup.controls['addressCtrl'].value,
        contact: this.studentFormGroup.controls['contactCtrl'].value,

      }
      this.studentservice.saveStudent(Formlist).subscribe((res) => {
        this.notifications.showSuccess();
        this.studentFormGroup.reset();

      }, (err) => {
        this.notifications.showError();
      });
    } else {

      let updateFormList = {

        id: this.IdByEdit,
        name: this.studentFormGroup.controls['nameCtrl'].value,
        address: this.studentFormGroup.controls['addressCtrl'].value,
        contact: this.studentFormGroup.controls['contactCtrl'].value,

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
      this.studentlist = res;
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

  openDeleteDialog() {

  }


}
