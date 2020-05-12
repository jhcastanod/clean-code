import { Base } from './base';

export class SpanishGreetingsOutput extends Base {
  introduceYourself() {
    console.log(`Hola, mi nombre es ${this.fullname}, tengo ${this.age} años`);
  }
}