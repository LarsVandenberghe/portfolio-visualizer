import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YahooSettingsComponent } from './views/yahoo-settings/yahoo-settings.component';

const routes: Routes = [
  {
    path: 'yahoo-settings',
    component: YahooSettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YahooSettingsRoutingModule { }
