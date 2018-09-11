import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollCenterComponent } from './payroll-center.component';

describe('PayrollCenterComponent', () => {
  let component: PayrollCenterComponent;
  let fixture: ComponentFixture<PayrollCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayrollCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
