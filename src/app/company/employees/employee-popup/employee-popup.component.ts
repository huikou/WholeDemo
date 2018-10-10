import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
///import {Course} from "../model/course";
import {FormBuilder, Validators, FormGroup, FormControl} from "@angular/forms";
//import * as moment from 'moment';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-employee-popup',
  templateUrl: './employee-popup.component.html',
  styleUrls: ['./employee-popup.component.css'],
  providers: [DatePipe]
})
export class EmployeePopupComponent implements OnInit {
  form: FormGroup;
  description:string;
  time;
  constructor( private fb: FormBuilder,private dialogRef: MatDialogRef<EmployeePopupComponent>,
    @Inject(MAT_DIALOG_DATA) data, private datePipe: DatePipe) { 
      this.description = data.description;
      const currentDate = new DatePipe('en-US').transform(new Date(), 'yyyy-dd-MM');
      this.form = fb.group({
        description: new FormControl('test description', {validators: Validators.required, updateOn: 'blur'}),
        category: ['BEGINNER', Validators.required],
        releasedAt: [currentDate, Validators.required],
        longDescription: new FormControl('',Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])),
        address: this.fb.group({
          street: [''],
          city: [''],
          state: [''],
          zip: ['']
        }),
       });
    }

  ngOnInit() {
    this.time = this.datePipe.transform(new Date());
  }

  save() {
    this.dialogRef.close(this.form.value);
}

close() {
    this.dialogRef.close();
}

}
