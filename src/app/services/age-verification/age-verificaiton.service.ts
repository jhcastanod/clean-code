import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgeVerificaitonService {
  readonly LEGAL_AGE = 18;

  ageVerification(age: number, firstName: string, lastname: string): string {
    if (age < this.LEGAL_AGE) {
      return `${firstName} ${lastname} is a minor`;
    } else {
      return `${firstName} ${lastname} is legal age`;
    }
  }
}
