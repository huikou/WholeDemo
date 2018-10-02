import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
///import {Course} from "../model/course";
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
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
        description: ['description', Validators.required],
        category: ['category', Validators.required],
        releasedAt: ['', Validators.required],
        longDescription: ['longDescription',Validators.required]
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
