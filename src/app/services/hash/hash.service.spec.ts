import { TestBed } from '@angular/core/testing';

import { HashService } from './hash.service';

describe('HashService', () => {
  let service: HashService;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    service = TestBed.get(HashService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a string encode', () => {
    const result = service.encode('hi man');

    expect(result).toBe('aA==aQ==IA==bQ==YQ==bg==');
  });
});
