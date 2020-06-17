import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathService {
  doCalcFibonacciSequence(num: number, memo: {}) {
    memo = memo || {};

    if (memo[num]) {
      return memo[num];
    }

    if (num <= 1) {
      return 1;
    }

    return memo[num] = this.doCalcFibonacciSequence(num - 1, memo) + this.doCalcFibonacciSequence(num - 2, memo);
  }
}