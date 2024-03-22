import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddtransferRoutingModule } from './addtransfer-routing.module';
import { AddtransferComponent } from './addtransfer.component';
import { ScrollDirective } from 'src/app/component/directives/scroll.directive';


@NgModule({
  declarations: [AddtransferComponent,
    ScrollDirective,
  ],
  imports: [
    CommonModule,
    AddtransferRoutingModule,
    
  ],
  bootstrap: [],
})
export class AddtransferModule {}
