import { TextToWords } from './text-to-words';

export class SpanishWords extends TextToWords {
  hasSpanishWords() {
    if (this.isTextEmpty()) {
      return false;
    }

    if (this.extractWords().length === 0) {
      return false;
    }

    return true;
  }
}