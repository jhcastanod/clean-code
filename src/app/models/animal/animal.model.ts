import { AnimalCategory } from 'enums/animal-category.enum';
import { AnimalSpeed } from 'enums/animal-speed.enum';

export class AnimalModel {
  age: number;
  category: AnimalCategory;
  name: string;
  speed: AnimalSpeed;

  isFrom(category: AnimalCategory): boolean {
    const result = this.category === category;

    return result;
  }
}