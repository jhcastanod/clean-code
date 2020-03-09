import { LocalStorage } from './strategies/local-storage.strategy';
import { CookieStorage } from './strategies/cookie-storage.strategy';

export const StorageProvider = {
  provide: 'STORAGE',
  useFactory: () => {
    const storage = window.localStorage
      ? new LocalStorage()
      : new CookieStorage();

    return storage;
  }
}