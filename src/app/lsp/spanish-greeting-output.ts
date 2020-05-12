import { GreetingsOutput } from './greetings-output';

export class SpanishGreetingsOutput extends GreetingsOutput {
  introduceYourself(): string {
    const greeeting = `Hola, mi nombre es ${this.fullname}, tengo ${this.age} años`;

    return greeeting;
  }
}