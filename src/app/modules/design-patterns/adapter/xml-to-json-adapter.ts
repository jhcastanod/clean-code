import { xml2json } from 'xml-js';

export class XMLtoJsonAdapter {
  constructor(private readonly xml: string) {}

  // TODO: Add return type
  convert() {
    try {
      const json = xml2json(this.xml, {compact: true, spaces: 4});

      return json;
    } catch (error) {
      return `An error has ocurred trying to convert XML to JSON. ${error}`;
    }
  }
}
