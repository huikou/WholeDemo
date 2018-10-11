import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferalSourceChartComponent } from './referal-source-chart.component';

describe('ReferalSourceChartComponent', () => {
  let component: ReferalSourceChartComponent;
  let fixture: ComponentFixture<ReferalSourceChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferalSourceChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferalSourceChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
