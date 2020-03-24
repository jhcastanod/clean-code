import { BadResquestErrorsToFormErrors } from './bad-request-errors-to-form-errors.transformer';

describe('BadResquestErrorsToFormErrors', () => {
  it('should transform from array to object errors structure', () => {
    const errorFromServer = [
      { key: 'key1', reason: 'reason1' },
      { key: 'key2', reason: 'reason2' },
      { key: 'key3', reason: 'reason3' },
    ];
    const errorExpected = {
      key1: { reason1: true },
      key2: { reason2: true },
      key3: { reason3: true },
    };

    const result = BadResquestErrorsToFormErrors.transformErrorsToFormErrors(errorFromServer);

    expect(result).toEqual(errorExpected);
  });
});

