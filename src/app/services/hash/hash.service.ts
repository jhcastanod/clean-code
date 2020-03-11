import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HashService {
  encrypt(value: string): string {
    const charactersInArr = value.split('');

    // Get its value in base64
    const encryptedCharacters = charactersInArr.map(letter => window.btoa(letter));

    const encryptedString = encryptedCharacters.join('');

    return encryptedString;
  }
}
