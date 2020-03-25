import { BadResquestErrorsToFormErrors } from './bad-request-errors-to-form-errors.transformer';

describe('BadResquestErrorsToFormErrors', () => {
  it('should transform errors to form errors', () => {
    const errorsFromServer = [
      { key: 'key1', reason: 'reason1' },
      { key: 'key2', reason: 'reason2' },
      { key: 'key3', reason: 'reason3' },
    ];
    const expectedErrors = {
      key1: { reason1: true },
      key2: { reason2: true },
      key3: { reason3: true },
    };

    const result = BadResquestErrorsToFormErrors.transformErrorsToFormErrors(errorsFromServer);

    expect(result).toEqual(expectedErrors);
  });
});

