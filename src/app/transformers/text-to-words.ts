export class TextToWords {
  constructor(private readonly text: string) {}

  extractWords(): string[] {
    const result = this.text.split(' ');

    return result;
  }

  isTextEmpty(): boolean {
    const isTextEmpty = this.text.length === 0;

    return isTextEmpty;
  }
}