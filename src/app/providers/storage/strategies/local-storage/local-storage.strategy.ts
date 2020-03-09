import { IStorage } from '../../interfaces/storage';

export class LocalStorage implements IStorage {
  get(key: string): string {
    const value = localStorage.getItem(key);

    return value;
  }

  set(key: string, value: string) {
    localStorage.setItem(key, value);
  }
}