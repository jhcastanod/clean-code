import { TextToWords } from './text-to-words';

export class SpanishWords extends TextToWords {
  readonly spanishWords = ['hola', 'adios', 'español'];

  constructor(text: string) {
    super(text);
  }

  hasSpanishWords(): boolean {
    const extractedWords = this.extractWords();

    extractedWords.some((word) => {
      return this.spanishWords.includes(word);
    });

    return false;
  }
}