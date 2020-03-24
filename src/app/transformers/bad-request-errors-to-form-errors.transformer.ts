export abstract class BadResquestErrorsToFormErrors {
  static transformErrorsToFormErrors(errors: { key: string; reason: string; }[]): object {
    const transformedErrors = {};

    for (const error of errors) {
      transformedErrors[error.key] = {
        [error.reason]: true,
      };
    }

    return transformedErrors;
  }
}