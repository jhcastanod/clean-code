import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { BadRequestInterceptor } from 'interceptors/bad-request.interceptor';
import { InternalServerErrorInterceptor } from 'interceptors/internal-server-error.interceptor';
import { ICityHero } from 'modules/design-patterns/factory/interfaces/city-hero.interface';
import { Batman } from 'modules/design-patterns/factory/models/batman.hero';
import { Superman } from 'modules/design-patterns/factory/models/superman.hero';
import { DateService } from 'modules/design-patterns/factory/services/date.service';
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
    {
      provide: 'CITY_HERO',
      useFactory: (dateService: DateService): ICityHero => {
        const cityHero = dateService.isNight() ? new Batman() : new Superman();

        return cityHero;
      },
      deps: [DateService]
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
