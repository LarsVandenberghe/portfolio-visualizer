import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faPen, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { combineLatest, map, ReplaySubject, startWith } from 'rxjs';
import { getAllStocksFromTransactions } from '../../helpers/stock.helpers';
import { IStockWithAVG, ITransaction, StockTypeEnum } from '../../types/stock.types';

const storedTransactions: ITransaction[] = [
  {
    amountOfShares: 2,
    price: 10,
    timestamp: 2,
    stock: { symbol: 'TSLA', shortName: 'Tesla, Inc.', type: StockTypeEnum.YahooStock }
  },
  {
    amountOfShares: 5,
    price: 11,
    timestamp: 2,
    stock: { symbol: 'TSLA', shortName: 'Tesla, Inc.', type: StockTypeEnum.YahooStock }
  },
  {
    amountOfShares: 2,
    price: 10,
    timestamp: 2,
    stock: { symbol: 'VOO', shortName: 'Vanguard 500 Index Fund', type: StockTypeEnum.YahooStock }
  }
];

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss']
})
export class StocksComponent implements OnInit {
  private stocksSubject$ = new ReplaySubject<IStockWithAVG[]>(1);
  filter = new FormControl('');
  stocks$ = combineLatest([
    this.stocksSubject$.asObservable(),
    this.filter.valueChanges.pipe(startWith(''))
  ]).pipe(map(([stocks, text]) => this.search(text, stocks)));
  faPlus = faPlus
  faPen = faPen
  faTrash = faTrash
  

  constructor() { }

  ngOnInit(): void {
    this.stocksSubject$.next(getAllStocksFromTransactions(storedTransactions))
  }

  private search(text: string, stockWithAVG: IStockWithAVG[]): IStockWithAVG[] {
    return stockWithAVG.filter(stock => {
      const term = text.toLowerCase();
      return stock.shortName.toLowerCase().includes(term)
          || stock.symbol.toLowerCase().includes(term);
    });
  }
}
