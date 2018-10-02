import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
///import {Course} from "../model/course";
import {FormBuilder, Validators, FormGroup, FormControl} from "@angular/forms";
//import * as moment from 'moment';

@Component({
  selector: 'app-employee-popup',
  templateUrl: './employee-popup.component.html',
  styleUrls: ['./employee-popup.component.css']
})
export class EmployeePopupComponent implements OnInit {
  form: FormGroup;
  description:string;
  constructor( private fb: FormBuilder,private dialogRef: MatDialogRef<EmployeePopupComponent>,
    @Inject(MAT_DIALOG_DATA) data) { 
      this.description = data.description;

      this.form = fb.group({
        description: new FormControl('description', {validators: Validators.required, updateOn: 'blur'}),
        category: ['BEGINNER', Validators.required],
        releasedAt: ['12/12/2014', Validators.required],
        longDescription: new FormControl('',Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ]))
       });
    }

  ngOnInit() {
  }

  save() {
    this.dialogRef.close(this.form.value);
}

close() {
    this.dialogRef.close();
}

}
