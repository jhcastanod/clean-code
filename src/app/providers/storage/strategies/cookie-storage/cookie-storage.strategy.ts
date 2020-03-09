import { IStorage } from '../../interfaces/storage';

export class CookieStorage implements IStorage {
  get(key: string): string {
    // Get from cookies

    return 'key';
  }

  set(key: string, value: string) {
    // Write in cookies
  }
}