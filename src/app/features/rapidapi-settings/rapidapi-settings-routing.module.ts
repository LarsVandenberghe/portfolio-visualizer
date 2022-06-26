import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RapidapiSettingsComponent } from './views/rapidapi-settings/rapidapi-settings.component';

const routes: Routes = [
  {
    path: 'rapidapi-settings',
    component: RapidapiSettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RapidapiSettingsRoutingModule { }
