import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathService {
  fibonacci(num: number): number {
    const isLessOrEqualThanOne = num <= 1;

    if (isLessOrEqualThanOne) {
      return 1;
    }

    const result = this.fibonacci(num - 1) + this.fibonacci(num - 2);

    return result;
  }
}