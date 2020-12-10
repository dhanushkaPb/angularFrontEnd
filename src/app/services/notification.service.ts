import { Injectable } from '@angular/core';
import { ToastrOptions } from 'ng6-toastr-notifications/lib/toastr.options';
import { ToastrManager } from 'ng6-toastr-notifications';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  public toastrmsg: ToastrOptions;


  constructor(public toastr: ToastrManager) {
    // this.toastrmsg = Constants.TOAST_ELEMENTS;

  }

  showSuccess(position: any = 'bottom-right') {
    this.toastr.successToastr('Save Success.', 'Success', {
      position: position
    });

  }

  showUpdateSuccess(position: any = 'bottom-right') {
    this.toastr.successToastr('Update Success.', 'Success Updated', {
      position: position
    });

  }

  showDeleteSuccess(position: any = 'bottom-right') {
    this.toastr.warningToastr('Delete Success.', 'Success Deleted', {
      position: position

    });

  }

  showUpdateError(position: any = 'bottom-right') {
    this.toastr.errorToastr('Error in Update.', 'Oops!', {
      position: position
    });
  }

  showError() {
    this.toastr.errorToastr('Error in Save.', 'Oops!');
  }

  GradeClass() {
    this.toastr.errorToastr('Error in Save plaese Insert Grade and Class Correctly.', 'Oops!');
  }

  showErrorDelete() {
    this.toastr.errorToastr('Error in Delete.', 'Oops!');
  }



  showWarning() {
    this.toastr.warningToastr('This is warning toast.', 'Alert!');
  }

  showInfo() {
    this.toastr.infoToastr('This is info toast.', 'Info');
  }

  showSuccessTable(position: any = 'bottom-right') {
    this.toastr.successToastr('Table Load SuccessFull.', 'Success Loading', {
      position: position
    });
  }

  showaWarningTable(position: any = 'bottom-right') {
    this.toastr.errorToastr('Table Load Fail.', 'Error Loading', {
      position: position
    });
  }

  showCustom() {
    // this.toastr.customToastr(
    // // '<span style='color: green; font-size: 16px; text-align: center;'>Custom Toast</span>',
    // // null,
    // // { enableHTML: true }
    // );
  }

  showToast(position: any = 'bottom-left') {
    this.toastr.infoToastr('This is a toast.', 'Toast', {
      position: position
    });
  }

}
