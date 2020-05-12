export abstract class GreetingsOutput {
  age: number;
  fullname: string;

  abstract introduceYourself(): string;
}