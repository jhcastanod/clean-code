import { AnimalCategory } from 'enums/animal-category.enum';
import { AnimalSpeed } from 'enums/animal-speed.enum';

export class AnimalModel {
  age: number;
  category: AnimalCategory;
  name: string;
  speed: AnimalSpeed;

  isFromWater(): boolean {
    const category = this.category === 'water';

    return category;
  }
}