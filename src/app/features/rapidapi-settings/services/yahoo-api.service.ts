import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAutoComplete } from '../types/rapidapi.types';

@Injectable({
  providedIn: 'root'
})
export class YahooApiService {
  private apiKeyLocation = 'yahoo-api-key';
  

  public get apiKey(): string | null {
    return localStorage.getItem(this.apiKeyLocation);
  }

  public set apiKey(v : string | null) {
    if (v == null) {
      localStorage.removeItem(this.apiKeyLocation);
    } else {
      localStorage.setItem(this.apiKeyLocation, v);
    }
  }
  
  private apiHost = 'yh-finance.p.rapidapi.com';

  constructor(private http: HttpClient) { }

  search$(name: string): Observable<any> {
    return this.http.get<IAutoComplete>(
      `https://${this.apiHost}/auto-complete`,
      {
        headers: {
          'X-RapidAPI-Key': this.apiKey ?? '',
          'X-RapidAPI-Host': this.apiHost
        },
        params: {'q': name}
      }
    );
  }
}
