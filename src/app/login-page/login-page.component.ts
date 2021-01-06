import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginFormGroup:FormGroup;
  constructor(  private formbuilder: FormBuilder,) { }


  

  ngOnInit(): void {

    this.setForm();
  }


  setForm(){

    this.loginFormGroup = this.formbuilder.group({
   



    })
  }

}
