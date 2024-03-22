import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubaddcategoryRoutingModule } from './subaddcategory-routing.module';
import { SubaddcategoryComponent } from './subaddcategory.component';
import { sharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    SubaddcategoryComponent
  ],
  imports: [
    CommonModule,
    SubaddcategoryRoutingModule,
    sharedModule
  ]
})
export class SubaddcategoryModule { }
