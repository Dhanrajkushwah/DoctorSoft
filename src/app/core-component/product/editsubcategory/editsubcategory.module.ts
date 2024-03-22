import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditsubcategoryRoutingModule } from './editsubcategory-routing.module';
import { EditsubcategoryComponent } from './editsubcategory.component';
import { sharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    EditsubcategoryComponent
  ],
  imports: [
    CommonModule,
    EditsubcategoryRoutingModule,
    sharedModule
  ]
})
export class EditsubcategoryModule { }
