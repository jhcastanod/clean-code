import { Injectable } from '@angular/core';

import { INotification } from 'interfaces/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  method(notificationType: INotification, options): void {}
}
