import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { PrecriptionListComponent } from './component/pages/precription-list/precription-list.component';
import { ViewPrescriptionComponent } from './component/shared/view-prescription/view-prescription.component';
import { AppointmentViewComponent } from './component/pages/appointment-view/appointment-view.component';
import { MedicalRecordComponent } from './component/pages/medical-record/medical-record.component';
import { MyAppointmentComponent } from './component/pages/my-appointment/my-appointment.component';
import { PrivateNotePatientComponent } from './component/pages/private-note-patient/private-note-patient.component';
import { MyInvoicesComponent } from './component/pages/my-invoices/my-invoices.component';
import { PaymentOptionsComponent } from './component/pages/payment-options/payment-options.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: '',
    component: ClientComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('../../core-component/dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path : 'prescription-list',
        component : PrecriptionListComponent
      },
      {
        path : 'prescription-list/view',
        component : ViewPrescriptionComponent
      },
      {
        path : 'appointment-list',
        component : AppointmentViewComponent
      },
      {
        path : "medicalrecord",
        component : MedicalRecordComponent
      },
      {
        path : "myinvoice",
        component : MyInvoicesComponent
      },
      {
        path : "myappointment",
        component : MyAppointmentComponent
      },
      {
        path : "privatenote",
        component : PrivateNotePatientComponent
      },
      {
        path : "payment",
        component : PaymentOptionsComponent
      }
   
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
