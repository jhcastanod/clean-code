export class TextToWords {
  constructor(private readonly text: string) {}

  extractWords(): string[] {
    const words = this.text.split(' ');

    return words;
  }

  isTextEmpty(): boolean {
    const isTextEmpty = this.text.length === 0;

    return isTextEmpty;
  }
}