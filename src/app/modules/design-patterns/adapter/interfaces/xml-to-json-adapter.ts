import { xml2json } from 'xml-js';

import { IAdapter } from './adapter';

export class XMLtoJsonAdapter implements IAdapter {
  constructor(private readonly xml: string) {}

  // TODO: Add return type
  convert() {
    try {
      const json = xml2json(this.xml, {compact: true, spaces: 4});

      return json;
    } catch (error) {
      return `xml is invalid. Error: ${error}`;
    }
  }
}
