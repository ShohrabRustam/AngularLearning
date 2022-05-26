import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StorageService } from './shared/storage.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgToastModule } from 'ng-angular-popup';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { TruncatePipe } from './truncate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgToastModule,
    FormsModule

  ],
  providers: [
    StorageService
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
