import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

import { CommonHeaderComponent } from 'src/app/common-component/common-header/common-header.component';
import { CommonLayoutComponent } from 'src/app/common-component/common-layout/common-layout.component';
import { CommonSidebarOneComponent } from 'src/app/common-component/common-sidebar-one/common-sidebar-one.component';
import { MaterialModule } from 'src/app/shared/material/material.module';

import { UsersComponent } from './component/pages/users/users.component';
import { ProductComponent } from './component/pages/product/product.component';
import { AddProductComponent } from './component/shared/add-product/add-product.component';
import { ReactiveFormsModule } from '@angular/forms';

import { AdduserComponent } from './component/shared/adduser/adduser.component';
import { ResetPasswordComponent } from './component/shared/reset-password/reset-password.component';
import { ClientsResetPasswordComponent } from './component/shared/clients-reset-password/clients-reset-password.component';
import { DoctorListComponent } from './component/pages/doctor-list/doctor-list.component';




@NgModule({
  declarations: [
    AdminComponent,
    UsersComponent,
    ProductComponent,
    AddProductComponent,
    AdduserComponent,
    ResetPasswordComponent,
    ClientsResetPasswordComponent,
    DoctorListComponent,
    // UsersComponent,

    // SidebarOneComponent,
    // SidebarTwoComponent,
    // SidebarThreeComponent,
    // SidebarFourComponent,
    // SidebarFiveComponent,
   

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CommonHeaderComponent,
    CommonLayoutComponent,
    CommonSidebarOneComponent,
    MaterialModule,
  ReactiveFormsModule,
  
  ],
 

})
export class AdminModule { }
