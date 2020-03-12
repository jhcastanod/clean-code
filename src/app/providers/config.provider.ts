import { IUrlConfig } from 'interfaces/config';

export const UrlConfigProvider = {
  provide: 'URL_CONFIG',
  useFactory: ({ domain = 'localhost', isHttps = false, prefixPath = '/app' }: IUrlConfig): IUrlConfig => {
    const obj = { domain, isHttps, prefixPath };

    return obj;
  }
}