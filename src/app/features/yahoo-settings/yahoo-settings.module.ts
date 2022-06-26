import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YahooSettingsRoutingModule } from './yahoo-settings-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { YahooSettingsComponent } from './views/yahoo-settings/yahoo-settings.component';
import { GetYahooStockComponent } from './components/get-yahoo-stock/get-yahoo-stock.component';


@NgModule({
  declarations: [
    YahooSettingsComponent,
    GetYahooStockComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    YahooSettingsRoutingModule
  ]
})
export class YahooSettingsModule { }
