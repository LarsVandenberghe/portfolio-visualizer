import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StocksRoutingModule } from './stocks-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { StocksComponent } from './views/stocks/stocks.component';
import { StockCardComponent } from './components/stock-card/stock-card.component';


@NgModule({
  declarations: [
    StocksComponent,
    StockCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    StocksRoutingModule
  ]
})
export class StocksModule { }
