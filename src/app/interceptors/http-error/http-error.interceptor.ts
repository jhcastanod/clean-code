import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { INTERNAL_SERVER_ERROR } from 'http-status-codes';

export class HttpErrorInterceptor implements HttpInterceptor {
  // TODO: fix type
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(catchError(this.onCatchError.bind(this)));
  }

  private onCatchError(httpError: HttpErrorResponse): Observable<never> {
    const isInternalServerError = httpError.status === INTERNAL_SERVER_ERROR;

    if (isInternalServerError) {
      httpError.error.errors = isInternalServerError;
    }

    return throwError(httpError);
  }
}