import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.css']
})
export class EmploymentComponent implements OnInit {

  constructor() { }
  @Input() currentEmpl: any;
  ngOnInit() {
  }

}
