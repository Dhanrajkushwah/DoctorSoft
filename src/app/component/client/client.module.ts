import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { CommonHeaderComponent } from 'src/app/common-component/common-header/common-header.component';
import { CommonLayoutComponent } from 'src/app/common-component/common-layout/common-layout.component';
import { CommonSidebarOneComponent } from 'src/app/common-component/common-sidebar-one/common-sidebar-one.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { PrecriptionListComponent } from './component/pages/precription-list/precription-list.component';
import { ViewPrescriptionComponent } from './component/shared/view-prescription/view-prescription.component';
import { AppointmentViewComponent } from './component/pages/appointment-view/appointment-view.component';
import { MedicalRecordComponent } from './component/pages/medical-record/medical-record.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MyAppointmentComponent } from './component/pages/my-appointment/my-appointment.component';
import { PrivateNotePatientComponent } from './component/pages/private-note-patient/private-note-patient.component';
import { MyInvoicesComponent } from './component/pages/my-invoices/my-invoices.component';
import { PaymentOptionsComponent } from './component/pages/payment-options/payment-options.component';
import { HealthcashHistoryComponent } from './component/pages/healthcash-history/healthcash-history.component'
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
  declarations: [
    ClientComponent,
    PrecriptionListComponent,
    ViewPrescriptionComponent,
    AppointmentViewComponent,
    MedicalRecordComponent,
    MyAppointmentComponent,
    PrivateNotePatientComponent,
    MyInvoicesComponent,
    PaymentOptionsComponent,
    HealthcashHistoryComponent,
 
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    CommonHeaderComponent,
    CommonLayoutComponent,
    CommonSidebarOneComponent,
    MaterialModule,
    MatSnackBarModule,
    MatTabsModule
  ]
})
export class ClientModule { }
