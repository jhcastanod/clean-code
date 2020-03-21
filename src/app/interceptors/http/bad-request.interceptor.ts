import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export class BadRequestHttpInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(catchError(this.onCatchError));
  }

  private onCatchError(error: HttpErrorResponse) {
    if (error.status === 400) {
      this.transformErrorsToFormErrors(error.error);
    }

    return throwError(error);
  }

  private transformErrorsToFormErrors(errors: { key: string, reason: string }[]) {
    const obj = {};

    for (const error of errors) {
      obj[error.key] = { [error.reason]: true };
    }

    return obj;
  }
}