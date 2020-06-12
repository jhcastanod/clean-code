import { GreetingsOutput } from './greetings-output';

export class PortugueseGreetingsOutput extends GreetingsOutput {
  introduceYourself(): string {
    const greeting = `Olá, meu nome é ${this.fullname}, eu tehno ${this.age} anos`;

    return greeting;
  }
}