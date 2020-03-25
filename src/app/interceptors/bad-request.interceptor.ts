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

import { BadResquestErrorsToFormErrors } from 'transformers/bad-request-errors-to-form-errors.transformer';

export class BadRequestHttpInterceptor implements HttpInterceptor {
  // TODO: Fix type
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