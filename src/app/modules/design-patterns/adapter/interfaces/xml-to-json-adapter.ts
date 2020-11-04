import { Observable, throwError } from 'rxjs';
import { xml2json } from 'xml-js';

import { IAdapter } from './adapter';

export class XMLtoJsonAdapter implements IAdapter {
  constructor(private readonly xml: string) {
    this.convert();
  }

  convert(): string {
    try {
      const json = xml2json(this.xml, {compact: true, spaces: 4});

      return json;
    } catch (error) {
      this.invalidXMLException(error);
    }
  }

  invalidXMLException(error: string): Observable<string> {
    return throwError(`xml is invalid. Error: ${error}`);
  }
}
