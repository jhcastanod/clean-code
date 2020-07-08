import { Injectable } from '@angular/core';

const START_NIGHT_AT_HOUR = 20;

@Injectable({
  providedIn: 'root'
})
export class DateService {
  isNight(): boolean {
    const isNight = (new Date()).getHours() >= START_NIGHT_AT_HOUR;

    return isNight;
  }
}