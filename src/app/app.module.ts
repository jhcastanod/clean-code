import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { BadRequestInterceptor } from 'interceptors/bad-request.interceptor';
import { InternalServerErrorInterceptor } from 'interceptors/internal-server-error.interceptor';
import { StorageProvider } from 'providers/storage/storage.provider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouletteBetComponent } from './modules/design-patterns/observer/components/roulette-bet/roulette-bet.component';
import { RouletteComponent } from './modules/design-patterns/observer/pages/roulette/roulette.component';

@NgModule({
  declarations: [
    AppComponent,
    RouletteBetComponent,
    RouletteComponent,
  ],
  imports: [AppRoutingModule, BrowserModule, FormsModule, HttpClientModule],
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
