import { throwError } from 'rxjs';
import { validateXML } from 'validate-with-xmllint';
import { xml2json } from 'xml-js';
import { IAdapter } from './adapter';

export class XMLtoJsonAdapter implements IAdapter {
  constructor(private readonly xml: string) {
    this.isXmlValid(xml);
  }

  convert() {
    const json = xml2json(this.xml, {compact: true, spaces: 4});

    return json;
  }

  isXmlValid(xml: string) {
    const xmlNotExist = validateXML(xml);

    if (xmlNotExist) {
      return throwError('xml is invalid');
    }

    this.convert();
  }
}
