import { TestBed } from '@angular/core/testing';

import { AgeVerificaitonService } from './age-verificaiton.service';

describe('AgeVerificaitonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AgeVerificaitonService = TestBed.get(AgeVerificaitonService);
    expect(service).toBeTruthy();
  });
});
