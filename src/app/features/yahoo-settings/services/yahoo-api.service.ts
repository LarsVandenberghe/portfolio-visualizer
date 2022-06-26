import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAutoComplete } from '../types/yahoo-api.types';

@Injectable({
  providedIn: 'root'
})
export class YahooApiService {
  private apiKey = 'some-api-key';
  private apiHost = 'yh-finance.p.rapidapi.com';

  constructor(private http: HttpClient) { }

  search$(name: string): Observable<any> {
    return this.http.get<IAutoComplete>(
      `https://${this.apiHost}/auto-complete`,
      {
        headers: {
          'X-RapidAPI-Key': this.apiKey,
          'X-RapidAPI-Host': this.apiHost
        },
        params: {'q': name}
      }
    );
  }
}
