import { TextToWords } from './text-to-words';

export class NonWords extends TextToWords {
  readonly NonWords = ['bitch', 'fuck', 'pussy'];

  hasNonWords(): boolean {
    const words = this.extractWords();

    const hasNonWords = words.some((word: string) => {
      const isNonWord = this.NonWords.includes(word);

      return isNonWord;
    });

    if (this.isTextEmpty()) {
      return false;
    }

    return hasNonWords;
  }
}