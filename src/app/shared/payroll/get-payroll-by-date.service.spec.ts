import { TestBed, inject } from '@angular/core/testing';

import { GetPayrollByDateService } from './get-payroll-by-date.service';

describe('GetPayrollByDateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetPayrollByDateService]
    });
  });

  it('should be created', inject([GetPayrollByDateService], (service: GetPayrollByDateService) => {
    expect(service).toBeTruthy();
  }));
});
