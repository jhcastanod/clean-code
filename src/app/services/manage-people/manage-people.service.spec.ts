import { TestBed } from '@angular/core/testing';

import { ManagePeopleService } from './manage-people.service';

describe('ManagePeopleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManagePeopleService = TestBed.get(ManagePeopleService);
    expect(service).toBeTruthy();
  });
});
