import { IConfig } from 'interfaces/config';

export const urlProvider = {
  provide: 'CONFIGURATION',
  useFactory: ({ domain, isHttps, prefixPath }: IConfig): IConfig => {
    const obj = { domain, isHttps, prefixPath };

    return obj;
  }
}