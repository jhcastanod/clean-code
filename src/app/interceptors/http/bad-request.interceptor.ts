import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, filter } from 'rxjs/operators';

export class BadRequestHttpInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 400) {
          this.formErrorsTransformer(error.error);
        }
        return throwError(error);
      }
      ));
  }

  formErrorsTransformer(error: { key: string, reason: string }[]) {
    const obj = {};

    for (const value of error) {
      obj[value.key] = { IS_EMPTY: true };
    }

    return obj;
  }
}