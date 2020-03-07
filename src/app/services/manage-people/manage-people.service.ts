import { Injectable } from '@angular/core';
import { IUser } from 'interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class ManagePeopleService {
  readonly LEGAL_AGE = 18;

  users: Array<IUser> = [
    {
      age: 17,
      firstName: 'Name1',
      lastName: 'LastName1'
    },
    {
      age: 18,
      firstName: 'Name2',
      lastName: 'lastName2'
    },
    {
      age: 19,
      firstName: 'Name3',
      lastName: 'lastName2'
    }
  ];

  filterIfHasLegalAge(users?: Array<IUser>) {
    let usersWithLegalAge: Array<IUser>;
    const fakeUsers = [
      { age: 21, firstName: 'fakeName1', lastName: 'fakeLastName1' },
      { age: 43, firstName: 'fakeName2', lastName: 'fakeLastName2' }
    ];

    if (!users) {
      return fakeUsers;
    }

    usersWithLegalAge = users.filter((user) => user.age >= this.LEGAL_AGE);

    return usersWithLegalAge;
  }

}
