import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductlistRoutingModule } from './productlist-routing.module';
import { ProductlistComponent } from './productlist.component';
import { sharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material/material.module';

@NgModule({
  declarations: [ProductlistComponent],
  imports: [CommonModule, ProductlistRoutingModule, sharedModule, MaterialModule],
})
export class ProductlistModule {}
