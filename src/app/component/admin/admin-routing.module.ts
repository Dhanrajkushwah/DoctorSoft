import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ProductComponent } from './component/pages/product/product.component';
import { AddProductComponent } from './component/shared/add-product/add-product.component';
import { UsersComponent } from './component/pages/users/users.component';

import { AdduserComponent } from './component/shared/adduser/adduser.component';
import { ResetPasswordComponent } from './component/shared/reset-password/reset-password.component';
import { ClientsResetPasswordComponent } from './component/shared/clients-reset-password/clients-reset-password.component';
import { DoctorListComponent } from './component/pages/doctor-list/doctor-list.component';
import { AllPatientInfoComponent } from '../super-admin/component/pages/all-patient-info/all-patient-info.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('../../core-component/dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path : 'doctorlist',
        component : DoctorListComponent
      }
      ,
      {
        path : 'product/add',
        component : AddProductComponent
      },
     
      {
        path : 'user',
        component : UsersComponent
      },
      {
        path : 'user/add-user',
        component : AdduserComponent
      },
      {
        path : 'user/reset-password',
        component : ResetPasswordComponent
      },
     
      {
        path : 'clients/client-reset-password',
        component : ClientsResetPasswordComponent
      },
      {
        path: "allpatient/:id",
        component : AllPatientInfoComponent
      },
   
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
