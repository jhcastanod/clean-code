import { TestBed } from '@angular/core/testing';

import { AgeVerificationService } from './age-verification.service';
import { IUser } from 'src/app/interfaces/user';

describe('AgeVerificationService', () => {
  let service: AgeVerificationService;
  let userWithoutAge: any;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    service = TestBed.get(AgeVerificationService);
    userWithoutAge = { firstName: 'Lucas', lastName: 'Monstro' };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should contains "is legal age" when user is legal age', () => {
    const expected = 'is legal age';
    const user: IUser = { ...userWithoutAge, age: 19 };

    const result = service.performAgeValidation(user);

    expect(result).toContain(expected);
  });

  it('should contains "is a minor" when user is minor', () => {
    const expected = 'is a minor';
    const user: IUser = { ...userWithoutAge, age: 7 };

    const result = service.performAgeValidation(user);

    expect(result).toContain(expected);
  });
});
