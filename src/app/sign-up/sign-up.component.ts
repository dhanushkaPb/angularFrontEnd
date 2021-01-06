import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {


   signupFormGroup:FormGroup;

  constructor(private  formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }


  setForm(){

    this.signupFormGroup = this.formBuilder.group({
      emailCtrl:[],

    })

  }



}
