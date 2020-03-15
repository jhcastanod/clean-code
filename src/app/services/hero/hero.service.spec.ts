import { TestBed } from '@angular/core/testing';

import { HeroService } from './hero.service';

describe('HeroService', () => {
  let service: HeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    service = TestBed.get(HeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create a hero', () => {
    const hero = {
      fly: true,
      life: 100,
      name: 'Superman'
    };

    const result = service.create(hero);

    expect(result).toEqual(hero);
  });

  it('should create a hurted hero', () => {
    const hero = { fly: true, name: 'Batman' };
    const expected = { fly: true, life: 20, name: 'Batman' };

    const result = service.createHurtedHero(hero);

    expect(result).toEqual(expected);
  });
});
