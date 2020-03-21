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

export class BadRequestHttpInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(catchError(this.onCatchError.bind(this)));
  }

  private onCatchError(httpError: HttpErrorResponse) {
    const isBadRequestError = httpError.status === BAD_REQUEST;

    if (isBadRequestError) {
      const transformedErrors = this.transformErrorsToFormErrors(
        httpError.error.errors,
      );

      httpError.error.errors = transformedErrors;
    }

    return throwError(httpError);
  }

  private transformErrorsToFormErrors(
    errors: {
      key: string;
      reason: string;
    }[],
  ) {
    const transformedErrors = {};

    for (const error of errors) {
      transformedErrors[error.key] = {
        [error.reason]: true,
      };
    }

    return transformedErrors;
  }
}
