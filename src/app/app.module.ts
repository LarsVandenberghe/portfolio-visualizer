
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { translateLoaderFactory } from './shared/helpers/http-loader-factory';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RapidapiSettingsModule } from './features/rapidapi-settings/rapidapi-settings.module';
import { StocksModule } from './features/stocks/stocks.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: translateLoaderFactory,
          deps: [HttpClient]
      }
    }),
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    SharedModule,
    RapidapiSettingsModule,
    StocksModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
