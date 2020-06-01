import { TestBed } from '@angular/core/testing';

import { ObserverRxjsService } from './observer-rxjs.service';

describe('ObserverRxjsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObserverRxjsService = TestBed.get(ObserverRxjsService);
    expect(service).toBeTruthy();
  });
});
