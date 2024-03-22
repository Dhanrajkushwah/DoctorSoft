import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailsettingsRoutingModule } from './emailsettings-routing.module';
import { EmailsettingsComponent } from './emailsettings.component';
import { sharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    EmailsettingsComponent
  ],
  imports: [
    CommonModule,
    EmailsettingsRoutingModule,
    sharedModule
  ]
})
export class EmailsettingsModule { }
