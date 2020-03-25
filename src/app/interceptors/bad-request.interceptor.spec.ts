import { TestBed } from '@angular/core/testing';

import { BadRequestHttpInterceptor } from './bad-request.interceptor';

describe('BadRequestHttpInterceptor', () => {
  let badRequestHttpInterceptor: BadRequestHttpInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    badRequestHttpInterceptor = TestBed.get(BadRequestHttpInterceptor);
  });

  it('should exist', () => {
    expect(badRequestHttpInterceptor).toBeTruthy();
  });
});