import { TestBed } from '@angular/core/testing';

import { DateService } from './date.service';

describe('DateService', () => {
  let service: DateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(DateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should convert minutes to milliseconds', () => {
    const result = service.minutesToMilliseconds(1);

    expect(result).toBe(60000);
  });
});
