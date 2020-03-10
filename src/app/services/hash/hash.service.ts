import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HashService {
  encode(value: string): string {
    const valueSplited = value.split('');

    // Get its value in base64
    const stringEncoded = valueSplited.map(letter => window.btoa(letter));

    const resultJoined = stringEncoded.join('');

    return resultJoined;
  }
}
