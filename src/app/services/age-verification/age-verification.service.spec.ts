import { TestBed } from '@angular/core/testing';

import { AgeVerificationService } from './age-verification.service';
import { IUser } from 'src/app/interfaces/user';

describe('AgeVerificationService', () => {
  let service: AgeVerificationService;
  const userWithoutAge = { firstName: 'Lucas', lastName: 'Monstro' };

  beforeEach(() => {
    TestBed.configureTestingModule({});

    service = TestBed.get(AgeVerificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
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
