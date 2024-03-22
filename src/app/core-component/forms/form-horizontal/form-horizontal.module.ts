import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormHorizontalRoutingModule } from './form-horizontal-routing.module';
import { FormHorizontalComponent } from './form-horizontal.component';
import { sharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    FormHorizontalComponent
  ],
  imports: [
    CommonModule,
    FormHorizontalRoutingModule,
    sharedModule
  ]
})
export class FormHorizontalModule { }
