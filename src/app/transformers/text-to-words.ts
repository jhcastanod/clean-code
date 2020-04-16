export class TextToWords {
  extractWords(text: string): string[] {
    const result = text.split(' ');

    return result;
  }

  isTextEmpty() {}
}