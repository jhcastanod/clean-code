import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

import { Storage } from 'interfaces/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  localStorage = window.localStorage;

  constructor(private readonly cookieService: CookieService) { }

  get(value: string): string {
    if (this.localStorage) {
      const getValue = localStorage.getItem(value);

      return getValue;
    }

    const getCookie = this.cookieService.get(value);

    return getCookie;
  }

  set({ key, value }: Storage) {
    if (this.localStorage) {
      localStorage.setItem(key, value);
    }

    this.cookieService.set(key, value);
  }
}