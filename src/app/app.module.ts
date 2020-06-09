import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BadRequestInterceptor } from 'interceptors/bad-request.interceptor';
import { InternalServerErrorInterceptor } from 'interceptors/internal-server-error.interceptor';
import { StorageProvider } from 'providers/storage/storage.provider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlackColorComponent } from './modules/design-patterns/observer/components/black-color/black-color.component';
import { GreenColorComponent } from './modules/design-patterns/observer/components/green-color/green-color.component';
import { RedColorComponent } from './modules/design-patterns/observer/components/red-color/red-color.component';
import { RouletteBetComponent } from './modules/design-patterns/observer/components/roulette-bet/roulette-bet.component';

@NgModule({
  declarations: [
    AppComponent,
    BlackColorComponent,
    GreenColorComponent,
    RedColorComponent,
    RouletteBetComponent,
  ],
  imports: [AppRoutingModule, BrowserModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BadRequestInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InternalServerErrorInterceptor,
      multi: true,
    },
    StorageProvider,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
