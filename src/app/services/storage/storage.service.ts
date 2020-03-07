import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  localStorage = window.localStorage;

  constructor(private readonly cookieService: CookieService) {}

  get(value: string): string {
    let cookie: string;

    if (this.localStorage) {
      cookie = localStorage.getItem(value);

      return cookie;
    }

    cookie = this.cookieService.get(value);

    return cookie;
  }

  set(key: string, value: string) {
    if (this.localStorage) {
      localStorage.setItem(key, value);
    }

    this.cookieService.set(key, value);
  }
}