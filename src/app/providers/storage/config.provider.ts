import { IConfig } from 'interfaces/config';

export const configProvider = {
  provide: 'configuration',
  useFactory: ({domain , prefixPath , isHttps}: IConfig) => {
    const obj = {domain, prefixPath, isHttps};

    return obj;
  }
}