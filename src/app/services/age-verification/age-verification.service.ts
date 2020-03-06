import { Injectable } from '@angular/core';

interface IUser {
  age: number;
  firstName: string;
  lastname: string;
}

@Injectable({
  providedIn: 'root'
})
export class AgeVerificationService {
  readonly LEGAL_AGE = 18;

  performAgeValidation({ age, firstName, lastname }: IUser): string {
    const fullName = `${firstName} ${lastname}`;
    const userHasLegalAge = age >= this.LEGAL_AGE;

    if (userHasLegalAge) {
      return `${fullName} is legal age`;
    }

    return `${fullName} is a minor`;
  }
}
