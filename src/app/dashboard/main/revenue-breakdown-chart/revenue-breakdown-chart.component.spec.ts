import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueBreakdownChartComponent } from './revenue-breakdown-chart.component';

describe('RevenueBreakdownChartComponent', () => {
  let component: RevenueBreakdownChartComponent;
  let fixture: ComponentFixture<RevenueBreakdownChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevenueBreakdownChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevenueBreakdownChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
