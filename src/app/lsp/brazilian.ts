import { Base } from './base';

export class BrazilianGreetingsOutput extends Base {
  introduceYourself() {
    console.log(`Olá, meu nome é ${this.fullname}, eu tehno ${this.age} anos`);
  }
}