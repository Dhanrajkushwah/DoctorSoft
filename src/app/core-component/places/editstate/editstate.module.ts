import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditstateRoutingModule } from './editstate-routing.module';
import { EditstateComponent } from './editstate.component';
import { sharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    EditstateComponent
  ],
  imports: [
    CommonModule,
    EditstateRoutingModule,
    sharedModule
  ]
})
export class EditstateModule { }
