import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SuperAdminComponent } from './super-admin.component';
import { CompanyComponent } from './component/pages/company/company.component';
import { AddCompanyComponent } from './component/shared/add-company/add-company.component';

import { CouponsComponent } from './component/pages/coupons/coupons.component';
import { AddCouponsComponent } from './component/shared/add-coupons/add-coupons.component';
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
import { PrescriptionPageComponent } from './component/pages/prescription-page/prescription-page.component';
import { PrescriptionControllerComponent } from './component/pages/prescription-controller/prescription-controller.component';
import { InvoiceComponent } from './component/pages/invoice/invoice.component';
import { InvoiceListComponent } from './component/pages/invoice-list/invoice-list.component';
import { HospitalListComponent } from './component/pages/hospital-list/hospital-list.component';
import { SmsTemplateListComponent } from './component/pages/sms-template-list/sms-template-list.component';
import { SmsTemplateSetupComponent } from './component/shared/sms-template-setup/sms-template-setup.component';
import { SmsScheduleListComponent } from './component/pages/sms-schedule-list/sms-schedule-list.component';
import { SmsScheduleComponent } from './component/shared/sms-schedule/sms-schedule.component';
import { AddHospitalComponent } from './component/shared/add-hospital/add-hospital.component';
import { StaffRegisterComponent } from './component/shared/staff-register/staff-register.component';
import { StaffComponent } from './component/pages/staff/staff.component';
import { AddDepartmentComponent } from './component/shared/add-department/add-department.component';
import { ViewPrescriptionComponent } from './component/pages/view-prescription/view-prescription.component';
import { AddTherapyComponent } from './component/shared/add-therapy/add-therapy.component';
import { AddDoctorSessionComponent } from './component/shared/add-doctor-session/add-doctor-session.component';
import { DoctorSessionComponent } from './component/pages/doctor-session/doctor-session.component';
import { AddDoctorUpdateComponent } from './component/shared/add-doctor-update/add-doctor-update.component';
import { AddpatientDocumentComponent } from './component/shared/addpatient-document/addpatient-document.component';
import { GenratePrescriptionComponent } from './component/pages/prescription-generate/genrate-prescription/genrate-prescription.component';
import { AllPatientInfoComponent } from './component/pages/all-patient-info/all-patient-info.component';
import { PrivateNoteComponent } from './component/pages/private-note/private-note.component';
import { AddPrivateNoteComponent } from './component/shared/add-private-note/add-private-note.component';
import { MedicationComponent } from './component/pages/medication/medication.component';
import { AddMedicationComponent } from './component/shared/add-medication/add-medication.component';
import { AddAppointmentComponent } from './component/shared/add-appointment/add-appointment.component';
import { NewPriscriptionComponent } from './component/pages/new-priscription/new-priscription.component';
import { CalenderComponent } from './component/pages/calender/calender.component';
import { NewCalenderComponent } from './component/pages/new-calender/new-calender.component';
import { ReportsComponent } from './component/pages/reports/reports.component';
import { AllpatientProfileComponent } from './component/pages/allpatient-profile/allpatient-profile.component';
import { DoctorInfoComponent } from './component/pages/doctor-info/doctor-info.component';
import { PatientReportComponent } from './component/pages/patient-report/patient-report.component';
import { PatientSuperadminComponent } from './component/pages/patient-superadmin/patient-superadmin.component';
import { LaboratoryComponent } from './component/pages/laboratory/laboratory.component';
import { AddLaboratoryComponent } from './component/shared/add-laboratory/add-laboratory.component';
import { VideoCallComponent } from './component/pages/video-call/video-call.component';
import { AddLabTestComponent } from './component/shared/add-lab-test/add-lab-test.component';
import { LabTestComponent } from './component/pages/lab-test/lab-test.component';
import { LabPackageComponent } from './component/pages/lab-package/lab-package.component';
import { AddLabPackageComponent } from './component/shared/add-lab-package/add-lab-package.component';
import { AddLabCategoryComponent } from './component/shared/add-lab-category/add-lab-category.component';
import { PackageIncludeComponentb } from './component/pages/package-include/package-include.component';
import { AddPackageIncludeComponent } from './component/shared/add-package-include/add-package-include.component';
import { PackageOfferComponent } from './component/pages/package-offer/package-offer.component';
import { AddPackageOfferComponent } from './component/shared/add-package-offer/add-package-offer.component';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: '',
    component: SuperAdminComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('../../core-component/dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path : 'company' ,
        component : CompanyComponent
      },
      {
        path : 'company/add' ,
        component : AddCompanyComponent
      },

      {
        path : 'coupons' ,
        component :CouponsComponent
      },
      {
        path : 'coupons/add' ,
        component : AddCouponsComponent
      },
      {
        path : 'patient' ,
        component :PatientComponent
      },
      {
        path : 'appointmentlist/add' ,
        component :AppoinmentComponent
      },
      {
        path : 'appointmentlist/add/edit/:id' ,
        component :AppoinmentComponent
      },

      {
       path : "appointmentlist",
       component: AppoinmentListComponent
      },
      {
        path : "prescription",
        component : PrescriptionPageComponent
      },
      {
        path : "viewprescriptions",
        component : PrescriptionControllerComponent
      },
      {
        path : "invoice/print",
        component : PrintPrescriptionComponent
      },
      {
        path : "invoice/print/:id",
        component : PrintPrescriptionComponent
      },
      {
        path : "priscription",
        component : NewPriscriptionComponent
      },
      {
        path : 'patient/add' ,
        component : AddPatientComponent
      },
      {
        path : 'patient/add/:id' ,
        component : AddPatientComponent
      },
      {
        path : 'department' ,
        component :DepartmentComponent
      },
      {
        path : 'doctor' ,
        component :DoctorComponent
      },
      {
        path : 'doctor/add-doctor' ,
        component :AddDoctorComponent
      },
    
      {
        path : 'doctor/add-doctor-update' ,
        component :AddDoctorUpdateComponent
      },
      {
        path : 'schedule' ,
        component :ScheduleComponent
      },
      {
        path : 'schedule/add-schedule' ,
        component :AddScheduleComponent
      },
      {
        path : 'sendcustomemail' ,
        component :SendCustomEmailComponent
      },
      {
        path : 'sendcustomemail/add-sendcustomemail' ,
        component :AddSendCustomEmailComponent
      },
      {
        path : 'prescription' ,
        component :PrescriptionComponent
      },
      {
        path : 'prescription/add' ,
        component :AddPrescriptionComponent
      },
      {
        path : 'prescription/add/:id' ,
        component :AddPrescriptionComponent
      },

      {
        path : 'viewprescription' ,
        component :ViewPrescriptionComponent
      },

      {
        path : 'hospital' ,
        component :HospitalListComponent
      },
      {
        path : "druglist",
        component : SmsTemplateListComponent
      },
      {
        path : "smstemplate",
        component : SmsTemplateSetupComponent
      },
      {
        path : "patienthistory",
        component : SmsScheduleListComponent
      },
      {
        path : "smsschedule/add",
        component : SmsScheduleComponent
      },
       {path : 'hospital/add-hospital' ,
        component :AddHospitalComponent
      },
      {
        path : 'staff' ,
        component :StaffComponent
      },
      {
        path : 'staff/add-resgister' ,
        component :StaffRegisterComponent
      },

      {
        path : 'department/add-department' ,
        component :AddDepartmentComponent
      },
      {
        path : 'department/add-department/:id' ,
        component :AddDepartmentComponent
      },

      {
        path : 'doctorsession' ,
        component :DoctorSessionComponent
      },
      {
        path : 'add-doctorsession' ,
        component :AddDoctorSessionComponent
      },
      {
        path : 'add-doctorsession/:id' ,
        component :AddDoctorSessionComponent
      },
      {
        path : 'patientdocument' ,
        component :AddpatientDocumentComponent
      },
      {
        path : 'patientdocument/:id' ,
        component :AddpatientDocumentComponent
      },
      {
        path : 'privatenote' ,
        component :PrivateNoteComponent
      },
      {
        path : 'add-privatenote' ,
        component :AddPrivateNoteComponent
      },
      {
        path : 'add-privatenote/:id' ,
        component :AddPrivateNoteComponent
      },
      {
        path : 'medication' ,
        component :MedicationComponent
      },
      {
        path : 'add-medication' ,
        component :AddMedicationComponent
      },
      {
        path : 'add-medication/:id' ,
        component :AddMedicationComponent
      },
      {
        path : 'addappoiment' ,
        component :AddAppointmentComponent
      },
      {
        path : 'addappoiment/:id' ,
        component :AddAppointmentComponent 
      },
      {
        path: "invoice",
        component : InvoiceListComponent
      },
      {
        path: "invoice/add",
        component : InvoiceComponent
      },
      {
        path: "invoice/add/:id",
        component : InvoiceComponent
      },
      {
        path: "calender",
        component : CalenderComponent
      },
      {
        path: "newcalender",
        component : NewCalenderComponent
      },
      {
        path: "generateprescrption",
        component: GenratePrescriptionComponent
      },
      {
        path: "generateprescrption/:id",
        component: GenratePrescriptionComponent
      },
      {
        path: "allpatient",
        component : AllPatientInfoComponent
      },
      {
        path: "allpatient/:id",
        component : AllPatientInfoComponent
      },
      {
        path : 'report' ,
        component :ReportsComponent
      },
      {
        path : 'allpatientPro' ,
        component :AllpatientProfileComponent
      },
      {
        path : "printprscrptn",
        component : NewPriscriptionComponent
      },
      {
        path : "printprscrptn/:appid/:pid:",
        component : NewPriscriptionComponent
      },
      {
        path : "doctorinfo",
        component : DoctorInfoComponent
      },
      {
        path : "patientreport",
        component : PatientReportComponent
      },
      {
        path : "patientdata",
        component : PatientSuperadminComponent
      },
      {
        path : "laboratory",
        component : LaboratoryComponent
      }
      ,
      {
        path : "addlaboratory",
        component : AddLaboratoryComponent
      }
      ,
      {
        path : "videocall",
        component : VideoCallComponent
      }
      ,
      {
        path : "addlabtest",
        component : AddLabTestComponent
      },
      {
        path : "labtest",
        component : LabTestComponent
      },
      {
        path : "labpackage",
        component : LabPackageComponent
      },
      {
        path : "addlabpackage",
        component : AddLabPackageComponent
      },
      {
        path : "category",
        component : AddLabCategoryComponent
      },

      {
        path : "packageinclude",
        component : PackageIncludeComponentb
      },
      {
        path : "addpackageinclude",
        component : AddPackageIncludeComponent
      },
      {
        path : "packageoffer",
        component : PackageOfferComponent
      },
      {
        path : "addpackageoffer",
        component : AddPackageOfferComponent
      }

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperAdminRoutingModule { }
