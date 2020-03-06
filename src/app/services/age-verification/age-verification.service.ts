import { Injectable } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AgeVerificationService {
  readonly LEGAL_AGE = 18;

  performAgeValidation({ age, firstName, lastName }: IUser): string {
    const fullName = `${firstName} ${lastName}`;
    const userHasLegalAge = age >= this.LEGAL_AGE;

    if (userHasLegalAge) {
      return `${fullName} is legal age`;
    }

    return `${fullName} is a minor`;
  }
}
