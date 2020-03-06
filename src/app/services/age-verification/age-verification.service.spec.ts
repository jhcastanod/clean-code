import { TestBed } from '@angular/core/testing';

import { AgeVerificationService } from './age-verification.service';

describe('AgeVerificationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AgeVerificationService = TestBed.get(AgeVerificationService);
    expect(service).toBeTruthy();
  });
});
