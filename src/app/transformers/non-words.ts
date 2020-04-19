import { TextToWords } from './text-to-words';

export class NonWords extends TextToWords {
  constructor(text: string) {
    super(text);
  }

  hasNonWords() {
    if (this.isTextEmpty()) {
      return false;
    }

    if (this.extractWords().length === 0) {
      return false;
    }

    return true;
  }
}