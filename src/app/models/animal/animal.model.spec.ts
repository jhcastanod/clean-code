import { TestBed } from '@angular/core/testing';

import { AnimalCategory } from 'enums/animal-category.enum';

import { AnimalModel } from './animal.model';

describe('Animal Model', () => {
  let model: AnimalModel;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnimalModel]
    });

    model = TestBed.get(AnimalModel);
  });

  it('should return true if animal is from water', () => {
    model.category = AnimalCategory.water;
    const result = model.isFrom(AnimalCategory.water);

    expect(result).toBeTruthy();
  });

  it('should return false if animal is not from water', () => {
    model.category = AnimalCategory.water;
    const result = model.isFrom(AnimalCategory.air);

    expect(result).toBeFalsy();
  });
})