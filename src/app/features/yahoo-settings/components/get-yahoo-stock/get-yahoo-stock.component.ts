import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { YahooApiService } from '../../services/yahoo-api.service';
import { IAutoComplete } from '../../types/yahoo-api.types';

@Component({
  selector: 'app-get-yahoo-stock',
  templateUrl: './get-yahoo-stock.component.html',
  styleUrls: ['./get-yahoo-stock.component.scss']
})
export class GetYahooStockComponent implements OnInit {
  autoComplete$: Observable<IAutoComplete> = this.yahooApiService.search$('Vinci SA');
  constructor(private yahooApiService: YahooApiService) { }

  ngOnInit(): void {
  }

}
