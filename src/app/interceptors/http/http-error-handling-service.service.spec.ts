import { TestBed } from '@angular/core/testing';

import { HttpErrorHandlingServiceService } from './http-error-handling-service.service';

describe('HttpErrorHandlingServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpErrorHandlingServiceService = TestBed.get(HttpErrorHandlingServiceService);
    expect(service).toBeTruthy();
  });
});
