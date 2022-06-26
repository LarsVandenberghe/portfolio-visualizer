import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RapidapiSettingsRoutingModule } from './rapidapi-settings-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { RapidapiSettingsComponent } from './views/rapidapi-settings/rapidapi-settings.component';
import { GetYahooStockComponent } from './components/get-yahoo-stock/get-yahoo-stock.component';


@NgModule({
  declarations: [
    RapidapiSettingsComponent,
    GetYahooStockComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RapidapiSettingsRoutingModule
  ]
})
export class RapidapiSettingsModule { }
