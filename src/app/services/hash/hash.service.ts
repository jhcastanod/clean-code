import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HashService {
  encrypt(value: string): string {
    const charactersInArr = value.split('');

    // Get its value in base64
    const encryptString = charactersInArr.map(letter => window.btoa(letter));

    const joinString = encryptString.join('');

    return joinString;
  }
}
