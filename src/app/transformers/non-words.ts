import { TextToWords } from './text-to-words';

export class NonWords extends TextToWords {
  readonly nonWords = ['bitch', 'fuck', 'pussy'];

  hasNonWords(): boolean {
    if (this.isTextEmpty()) {
      return false;
    }

    const words = this.extractWords();

    const hasNonWords = words.some((word: string) => {
      const isNonWord = this.nonWords.includes(word);

      return isNonWord;
    });

    return hasNonWords;
  }
}