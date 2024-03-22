import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopoverRoutingModule } from './popover-routing.module';
import { PopoverComponent } from './popover.component';
import { NgxbootstrapModule } from 'src/app/shared/ngx-bootstrap/ngxbootstrap.module';
// import { PopoverModule } from 'ngx-bootstrap/popover';
import { sharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    PopoverComponent
  ],
  imports: [
    CommonModule,
    PopoverRoutingModule,
    NgxbootstrapModule,
    // PopoverModule.forRoot(),
    sharedModule
  ]
})
export class PopoverModule { }
