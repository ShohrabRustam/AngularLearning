import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StorageService } from './shared/storage.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgToastModule } from 'ng-angular-popup';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgToastModule

  ],
  providers: [
    StorageService
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
