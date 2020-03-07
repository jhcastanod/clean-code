import { Injectable } from '@angular/core';

import { IUser } from 'interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AgeVerificationService {
  readonly LEGAL_AGE = 18;

  performAgeValidation({ age, firstName, lastName }: IUser): string {
    const fullName = `${firstName} ${lastName}`;
    const userHasLegalAge = this.isLegalAge(age);

    if (userHasLegalAge) {
      return `${fullName} is legal age`;
    }

    return `${fullName} is a minor`;
  }

  isLegalAge(age: number): boolean {
    const isLegalAge = age >= this.LEGAL_AGE;

    return isLegalAge;
  }
}
