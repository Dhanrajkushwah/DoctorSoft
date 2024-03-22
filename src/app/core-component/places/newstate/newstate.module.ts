import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewstateRoutingModule } from './newstate-routing.module';
import { NewstateComponent } from './newstate.component';
import { sharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    NewstateComponent
  ],
  imports: [
    CommonModule,
    NewstateRoutingModule,
    sharedModule
  ]
})
export class NewstateModule { }
