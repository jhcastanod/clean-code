import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HashService {
  encode(value: string): string {
    // Split string to loop throught it
    const valueSplited = value.split('');

    // Get its value in base64
    const stringEncoded = valueSplited.map((l) => window.btoa(l));

    // Join all base64 values and return string
    const resultJoined = stringEncoded.join('');

    return resultJoined;
  }
}
