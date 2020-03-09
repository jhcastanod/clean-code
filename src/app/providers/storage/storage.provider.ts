import { CookieStorage } from './strategies/cookie-storage/cookie-storage.strategy';
import { LocalStorage } from './strategies/local-storage/local-storage.strategy';

export const StorageProvider = {
  provide: 'STORAGE',
  useFactory: () => {
    const storage = window.localStorage
      ? new LocalStorage()
      : new CookieStorage();

    return storage;
  }
}