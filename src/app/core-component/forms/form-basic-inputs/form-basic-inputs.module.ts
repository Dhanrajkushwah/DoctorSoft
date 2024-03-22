import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormBasicInputsRoutingModule } from './form-basic-inputs-routing.module';
import { FormBasicInputsComponent } from './form-basic-inputs.component';
import { sharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    FormBasicInputsComponent
  ],
  imports: [
    CommonModule,
    FormBasicInputsRoutingModule,
    sharedModule
  ]
})
export class FormBasicInputsModule { }
