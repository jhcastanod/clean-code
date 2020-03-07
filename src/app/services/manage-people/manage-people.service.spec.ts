import { TestBed } from '@angular/core/testing';

import { IUser } from 'interfaces/user';
import { userWithoutAge } from 'utils/mocks';

import { ManagePeopleService } from './manage-people.service';

describe('ManagePeopleService', () => {
  let service: ManagePeopleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    service = TestBed.get(ManagePeopleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should filter users when they are gte legal age', () => {
    const users: IUser[] = [
      { ...userWithoutAge, age: 18 },
      { ...userWithoutAge, age: 21 },
      { ...userWithoutAge, age: 12 },
      { ...userWithoutAge, age: 22 }
    ];

    const result = service.olderThanLegalAge(users);

    expect(result.length).toBe(3);
  });

  it('should return empty when no params are passed', () => {
    const result = service.olderThanLegalAge();

    expect(result).toEqual([]);
  });
});
