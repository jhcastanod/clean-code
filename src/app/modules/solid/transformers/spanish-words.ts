import { TextToWords } from './text-to-words';

export class SpanishWords extends TextToWords {
  readonly spanishWords = ['hola', 'adios', 'español'];

  hasSpanishWords(): boolean {
    if (this.isTextEmpty()) {
      return false;
    }

    const words = this.extractWords();

    const hasSpanishWords = words.some((word: string) => {
      const isSpanishWord = this.spanishWords.includes(word);

      return isSpanishWord;
    });

    return hasSpanishWords;
  }
}