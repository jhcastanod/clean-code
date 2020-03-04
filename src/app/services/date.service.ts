import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  minutesToMiliseconds(minutes: number) {
    const result = minutes * 60000;

    return result;
  }
}
