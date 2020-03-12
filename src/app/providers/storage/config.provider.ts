import { IUrlConfig } from 'interfaces/config';

export const configProvider = {
  provide: 'URL_CONFIG',
  useFactory: ({ domain, isHttps, prefixPath }: IUrlConfig): IUrlConfig => {
    const obj = { domain, isHttps, prefixPath };

    return obj;
  }
}