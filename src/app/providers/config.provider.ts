import { IUrlConfig } from 'interfaces/config';

export const UrlConfigProvider = {
  provide: 'URL_CONFIG',
  useFactory: ({ domain, isHttps, prefixPath }: IUrlConfig): IUrlConfig => {
    const obj = {
      domain: domain ? domain : 'localhost',
      isHttps: isHttps ? isHttps : false,
      prefixPath: prefixPath ? prefixPath : '/app'
    };

    return obj;
  }
}