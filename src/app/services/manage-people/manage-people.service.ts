import { Injectable } from '@angular/core';

import { IUser } from 'interfaces/user';

import { AgeVerificationService } from 'services/age-verification/age-verification.service';

@Injectable({
  providedIn: 'root'
})
export class ManagePeopleService {
  constructor(private readonly ageVerification: AgeVerificationService) {}

  olderThanLegalAge(users: IUser[] = []): IUser[] {
    const usersWithLegalAge = users.filter(user => this.ageVerification.isLegalAge(user.age));

    return usersWithLegalAge;
  }
}