import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    // CommonModule,
    MenuBarComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FontAwesomeModule,
    TranslateModule.forChild({}),
  ],
  exports: [
    MenuBarComponent
  ]
})
export class SharedModule { }
