import { TestBed } from '@angular/core/testing';

import { AgeVerificationService } from './age-verification.service';

describe('AgeVerificationService', () => {
  let service: AgeVerificationService;
  beforeEach(() => {
    TestBed.configureTestingModule({});

    service = TestBed.get(AgeVerificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should contains "is legal age" when user is legal age', () => {
    const params = {
      age: 19,
      firstName: 'Lucas',
      lastName: 'Monstro'
    };
    const result = service.performAgeValidation(params);
    expect(result).toContain('is legal age');
  });

  it('should contains "is a minor" when user is minor', () => {
    const params = {
      age: 7,
      firstName: 'Lucas',
      lastName: 'Monstro'
    };
    const result = service.performAgeValidation(params);
    expect(result).toContain('is a minor');
  });
});
