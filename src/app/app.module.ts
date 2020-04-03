import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BadRequestHttpInterceptor } from 'interceptors/bad-request.interceptor';
import { StorageProvider } from 'providers/storage/storage.provider';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { InternalServerErrorHttpInterceptor } from 'interceptors/internal-server-error.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, BrowserModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BadRequestHttpInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InternalServerErrorHttpInterceptor,
      multi: true,
    },
    StorageProvider,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
