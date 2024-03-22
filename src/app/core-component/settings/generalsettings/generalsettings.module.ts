import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralsettingsRoutingModule } from './generalsettings-routing.module';
import { GeneralsettingsComponent } from './generalsettings.component';
import { sharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    GeneralsettingsComponent
  ],
  imports: [
    CommonModule,
    GeneralsettingsRoutingModule,
    sharedModule
  ]
})
export class GeneralsettingsModule { }
