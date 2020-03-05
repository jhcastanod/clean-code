import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  readonly MINUTE_IN_MILLISECONDS = 60000;

  minutesToMilliseconds(minutes: number): number {
    const milliseconds = minutes * this.MINUTE_IN_MILLISECONDS;

    return milliseconds;
  }
}
