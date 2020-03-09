import { CookieStorage } from './cookie-storage.strategy';
import { TestBed } from '@angular/core/testing';

describe('CookieStorage', () => {
  let strategy: CookieStorage;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CookieStorage]
    });

    strategy = TestBed.get(CookieStorage);
  });

  it('should create', () => {
    expect('d').toBeTruthy();
  });
})