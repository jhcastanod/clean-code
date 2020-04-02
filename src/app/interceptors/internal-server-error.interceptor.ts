import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { INTERNAL_SERVER_ERROR } from 'http-status-codes';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NotificationService } from 'services/notification/notification.service';

export class InternalServerErrorHttpInterceptor implements HttpInterceptor {
  constructor(private readonly notificationService: NotificationService) {}
  // TODO: fix type
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(catchError(this.onCatchError.bind(this)));
  }

  private onCatchError(httpError: HttpErrorResponse): Observable<never> {
    const isInternalServerError = httpError.status === INTERNAL_SERVER_ERROR;

    if (isInternalServerError) {
      this.notificationService.show('error', 'A server error has ocurred');
    }

    return throwError(httpError);
  }
}