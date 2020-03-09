import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StorageProvider } from 'providers/storage/storage.provider';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [StorageProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
