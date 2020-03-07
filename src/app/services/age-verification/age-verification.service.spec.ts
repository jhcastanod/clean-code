import { TestBed } from '@angular/core/testing';

import { IUser } from 'interfaces/user';
import { userWithoutAge } from 'utils/mocks';

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

  it('should return true when age is gte legal age', () => {
    const userAge = 19;

    const result = service.isLegalAge(userAge);

    expect(result).toBeTruthy();
  });

  it('should returns false when age is lt legal age', () => {
    const userAge = 17;

    const result = service.isLegalAge(userAge);

    expect(result).toBeFalsy();
  });

  it('should contains "is legal age" when user is legal age', () => {
    const user: IUser = { ...userWithoutAge, age: 19 };

    const result = service.performAgeValidation(user);

    expect(result).toContain('is legal age');
  });

  it('should contains "is a minor" when user is minor', () => {
    const user: IUser = { ...userWithoutAge, age: 7 };

    const result = service.performAgeValidation(user);

    expect(result).toContain('is a minor');
  });
});
