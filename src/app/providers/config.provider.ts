import { IUrlConfig } from 'interfaces/config';

export const UrlConfigProvider = {
  provide: 'URL_CONFIG',
  useFactory: (urlConfig: IUrlConfig): IUrlConfig => {
    const defaultUrlConfig = { domain: 'localhost', isHttps: true, prefixPath: '/app' };
    const mergedUrlConfig = Object.assign(defaultUrlConfig, urlConfig);

    return mergedUrlConfig;
  }
}