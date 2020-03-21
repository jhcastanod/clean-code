import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BAD_REQUEST } from 'http-status-codes';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BadRequestHttpInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    return next
      .handle(req)
      .pipe(catchError(httpError => this.onCatchError(httpError)));
  }

  private onCatchError(httpError: HttpErrorResponse) {
    if (httpError.status === BAD_REQUEST) {
      httpError.error.errors = this.transformErrorsToFormErrors(
        httpError.error.errors,
      );
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
