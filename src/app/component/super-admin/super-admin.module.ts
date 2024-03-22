import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { SuperAdminRoutingModule } from './super-admin-routing.module';
import { SuperAdminComponent } from './super-admin.component';
import { CompanyComponent } from './component/pages/company/company.component';
import { AddCompanyComponent } from './component/shared/add-company/add-company.component';
import { CouponsComponent } from './component/pages/coupons/coupons.component';
import { AddCouponsComponent } from './component/shared/add-coupons/add-coupons.component';
import { CommonHeaderComponent } from 'src/app/common-component/common-header/common-header.component';
import { CommonLayoutComponent } from 'src/app/common-component/common-layout/common-layout.component';
import { CommonSidebarOneComponent } from 'src/app/common-component/common-sidebar-one/common-sidebar-one.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PatientComponent } from './component/pages/patient/patient.component';
import { AddPatientComponent } from './component/shared/add-patient/add-patient.component';
import { DepartmentComponent } from './component/pages/department/department.component';
import { DoctorComponent } from './component/pages/doctor/doctor.component';
import { AddDoctorComponent } from './component/shared/add-doctor/add-doctor.component';
import { PrescriptionComponent } from './component/pages/prescription/prescription.component';
import { AddPrescriptionComponent } from './component/shared/add-prescription/add-prescription.component';
import { AppoinmentComponent } from './component/pages/appoinment/appoinment.component';
import { AppoinmentListComponent } from './component/pages/appoinment-list/appoinment-list.component';
import { ScheduleComponent } from './component/pages/schedule/schedule.component';
import { AddScheduleComponent } from './component/shared/add-schedule/add-schedule.component';
import { SendCustomEmailComponent } from './component/pages/send-custom-email/send-custom-email.component';
import { AddSendCustomEmailComponent } from './component/shared/add-send-custom-email/add-send-custom-email.component';
import { PrintPrescriptionComponent } from './component/pages/print-prescription/print-prescription.component';
import { PrescriptionControllerComponent } from './component/pages/prescription-controller/prescription-controller.component';
import { PrescriptionPageComponent } from './component/pages/prescription-page/prescription-page.component';
import { InvoiceComponent } from './component/pages/invoice/invoice.component';
import { InvoiceListComponent } from './component/pages/invoice-list/invoice-list.component';
import { HospitalListComponent } from './component/pages/hospital-list/hospital-list.component';
import { AddHospitalComponent } from './component/shared/add-hospital/add-hospital.component';
import { SmsTemplateSetupComponent } from './component/shared/sms-template-setup/sms-template-setup.component';
import { SmsTemplateListComponent } from './component/pages/sms-template-list/sms-template-list.component';
import { SmsScheduleListComponent } from './component/pages/sms-schedule-list/sms-schedule-list.component';
import { SmsScheduleComponent } from './component/shared/sms-schedule/sms-schedule.component';
import { StaffRegisterComponent } from './component/shared/staff-register/staff-register.component';
import { StaffComponent } from './component/pages/staff/staff.component';
import { AddDepartmentComponent } from './component/shared/add-department/add-department.component';
import { ViewPrescriptionComponent } from './component/pages/view-prescription/view-prescription.component';
import { DoctorViewComponent } from './component/pages/doctor-view/doctor-view.component';
import { AddTherapyComponent } from './component/shared/add-therapy/add-therapy.component';
import { DoctorSessionComponent } from './component/pages/doctor-session/doctor-session.component';
import { AddDoctorSessionComponent } from './component/shared/add-doctor-session/add-doctor-session.component';
import { AddDoctorUpdateComponent } from './component/shared/add-doctor-update/add-doctor-update.component';
import { AngularSignaturePadModule } from '@almothafar/angular-signature-pad';
import { AddpatientDocumentComponent } from './component/shared/addpatient-document/addpatient-document.component';
import { GenratePrescriptionComponent } from './component/pages/prescription-generate/genrate-prescription/genrate-prescription.component';
// import { PrivateNoteComponent } from './component/pages/private-note/private-note.component';
// import { AddPrivateNoteComponent } from './component/shared/add-private-note/add-private-note.component';
// import { MedicationComponent } from './component/pages/medication/medication.component';
import { AllPatientInfoComponent } from './component/pages/all-patient-info/all-patient-info.component';
import { AddAllVisitersComponent } from './component/shared/add-all-visiters/add-all-visiters.component';
import { AddMedicationComponent } from './component/shared/add-medication/add-medication.component';
import { AddAttachmentsComponent } from './component/shared/add-attachments/add-attachments.component';
import { AddPrivateNoteComponent } from './component/shared/add-private-note/add-private-note.component';
import { AddPaymentPlanComponent } from './component/shared/add-payment-plan/add-payment-plan.component';
import { AddInvoiceComponent } from './component/shared/add-invoice/add-invoice.component';
import { PrivateNoteComponent } from './component/pages/private-note/private-note.component';
import { MedicationComponent } from './component/pages/medication/medication.component';
import { AddAppointmentComponent } from './component/shared/add-appointment/add-appointment.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { FlatpickrModule } from 'angularx-flatpickr';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { CalenderComponent } from './component/pages/calender/calender.component';
import { NewCalenderComponent } from './component/pages/new-calender/new-calender.component';
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatChipsModule } from '@angular/material/chips';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { AngularEditorModule } from '@kolkov/angular-editor';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { ReportsComponent } from './component/pages/reports/reports.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NewPriscriptionComponent } from './component/pages/new-priscription/new-priscription.component';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {MatTabsModule} from '@angular/material/tabs';
import {MatBadgeModule} from '@angular/material/badge';
import { AllpatientProfileComponent } from './component/pages/allpatient-profile/allpatient-profile.component';
import { DoctorInfoComponent } from './component/pages/doctor-info/doctor-info.component';
import { PatientReportComponent } from './component/pages/patient-report/patient-report.component';
import { PatientSuperadminComponent } from './component/pages/patient-superadmin/patient-superadmin.component';
import { LaboratoryComponent } from './component/pages/laboratory/laboratory.component';
import { AddLaboratoryComponent } from './component/shared/add-laboratory/add-laboratory.component';
import { VideoCallComponent } from './component/pages/video-call/video-call.component';
import { LabTestComponent } from './component/pages/lab-test/lab-test.component';
import { AddLabTestComponent } from './component/shared/add-lab-test/add-lab-test.component';
import { LabPackageComponent } from './component/pages/lab-package/lab-package.component';
import { AddLabPackageComponent } from './component/shared/add-lab-package/add-lab-package.component';
import { AddLabCategoryComponent } from './component/shared/add-lab-category/add-lab-category.component';
import { PackageIncludeComponentb } from './component/pages/package-include/package-include.component';
import { AddPackageIncludeComponent } from './component/shared/add-package-include/add-package-include.component';
import { MatSelectModule } from '@angular/material/select';
import { PackageOfferComponent } from './component/pages/package-offer/package-offer.component';
import { AddPackageOfferComponent } from './component/shared/add-package-offer/add-package-offer.component';

@NgModule({
  declarations: [
    SuperAdminComponent,
    CompanyComponent,
    AddCompanyComponent,
    CouponsComponent,
    AddCouponsComponent,
    PatientComponent,
    AddPatientComponent,
    DepartmentComponent,
    DoctorComponent,
    AddDoctorComponent,
    PrescriptionComponent,
    AddPrescriptionComponent,
    AppoinmentComponent,
    AppoinmentListComponent,
    ScheduleComponent,
    AddScheduleComponent,
    SendCustomEmailComponent,
    AddSendCustomEmailComponent,
    PrintPrescriptionComponent,
    PrescriptionControllerComponent,
    PrescriptionPageComponent,
    InvoiceComponent,
    InvoiceListComponent,
    HospitalListComponent,
    AddHospitalComponent,
    SmsTemplateSetupComponent,
    SmsTemplateListComponent,
    SmsScheduleListComponent,
    SmsScheduleComponent,
    StaffRegisterComponent,
    StaffComponent,
    AddDepartmentComponent,
    ViewPrescriptionComponent,
    DoctorViewComponent,
    AddTherapyComponent,
    DoctorSessionComponent,
    AddDoctorSessionComponent,
    AddDoctorUpdateComponent,
    AddpatientDocumentComponent,
    GenratePrescriptionComponent,
    PrivateNoteComponent,
    AddPrivateNoteComponent,
    MedicationComponent,
    AllPatientInfoComponent,
    AddAllVisitersComponent,
    AddMedicationComponent,
    AddAttachmentsComponent,
    AddPrivateNoteComponent,
    AddPaymentPlanComponent,
    AddInvoiceComponent,
    PrivateNoteComponent,
    MedicationComponent,
    AddAppointmentComponent,
    NewPriscriptionComponent,
    CalenderComponent,
    NewCalenderComponent,
    ReportsComponent,
    AllpatientProfileComponent,
    DoctorInfoComponent,
    PatientReportComponent,
    PatientSuperadminComponent,
    LaboratoryComponent,
    AddLaboratoryComponent,
    VideoCallComponent,
    LabTestComponent,
    AddLabTestComponent,
    LabPackageComponent,
    AddLabPackageComponent,
    AddLabCategoryComponent,
    PackageIncludeComponentb,
    AddPackageIncludeComponent,
    PackageOfferComponent,
    AddPackageOfferComponent,
  ],
  imports: [
    CommonModule,
    SuperAdminRoutingModule,
    MaterialModule,
    CommonHeaderComponent,
    CommonLayoutComponent,
    CommonSidebarOneComponent,
    AngularEditorModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
     MatInputModule,
      MatButtonModule,
       MatSnackBarModule ,
    MatTableModule,
    AngularSignaturePadModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatIconModule,MatBadgeModule,
    CalendarModule,
    NgbModalModule,
    MatSelectModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    MatChipsModule,
    MatAutocompleteModule,
    MatIconModule,
    NgApexchartsModule,
    CdkAccordionModule,
    MatTabsModule
    
    
  ],
  bootstrap:[CalenderComponent],
  providers:[DatePipe]
})
export class SuperAdminModule { }
