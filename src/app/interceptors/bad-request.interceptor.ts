import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { BAD_REQUEST } from 'http-status-codes';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { BadResquestErrorsToFormErrors } from 'modules/solid/transformers/bad-request-errors-to-form-errors.transformer';

export class BadRequestInterceptor implements HttpInterceptor {
  // TODO: Fix return type
  intercept(
    // TODO: Fix type
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(catchError(this.onCatchError.bind(this)));
  }

  private onCatchError(httpError: HttpErrorResponse): Observable<never> {
    const isBadRequestError = httpError.status === BAD_REQUEST;

    if (isBadRequestError) {
      const transformedErrors = BadResquestErrorsToFormErrors
        .transformErrorsToFormErrors(httpError.error.errors);

      httpError.error.errors = transformedErrors;
    }

    return throwError(httpError);
  }
}
