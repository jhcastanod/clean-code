import { Injectable } from '@angular/core';

import { Memo } from '../decorators/memoize';

@Injectable({
  providedIn: 'root'
})
export class MathService {
  @Memo()
  fibonacci(num: number): number {
    const isNumLessOrEqualOne = num <= 1;
    const result = isNumLessOrEqualOne ? 1 : this.fibonacci(num - 1) + this.fibonacci(num - 2);

    return result;
  }
}