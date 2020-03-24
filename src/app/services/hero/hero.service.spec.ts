import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { HeroService } from './hero.service';

describe('HeroService', () => {
  let service: HeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });

    service = TestBed.get(HeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call create method', () => {
    const hero = { fly: true, name: 'Batman' };
    const create = service.create(hero);

    expect(create).toBeTruthy();
  });
});
