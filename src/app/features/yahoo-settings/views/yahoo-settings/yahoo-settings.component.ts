import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { YahooApiService } from '../../services/yahoo-api.service';
import { IAutoComplete } from '../../types/yahoo-api.types';

@Component({
  selector: 'app-yahoo-settings',
  templateUrl: './yahoo-settings.component.html',
  styleUrls: ['./yahoo-settings.component.scss']
})
export class YahooSettingsComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
