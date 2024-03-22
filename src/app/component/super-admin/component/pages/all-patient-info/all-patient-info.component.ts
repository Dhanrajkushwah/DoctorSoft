import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CompanyService } from '../../../services/company.service';

@Component({
  selector: 'app-all-patient-info',
  templateUrl: './all-patient-info.component.html',
  styleUrls: ['./all-patient-info.component.scss']
})
export class AllPatientInfoComponent implements OnInit {
  id:any;
  allpatientdata:any=[];
  allAppointmentByPatientId : any = [];
  appointmentCount: any;
  doctorId:any;
  consultationData: any = [];
  constructor(
    private route : Router,
    private activatedRoute : ActivatedRoute,
    private  Companyservice:CompanyService
  ){}
  ngOnInit(): void {
    this.doctorId = sessionStorage.getItem('admin_id')
    this.activatedRoute.params.subscribe((params: Params)=>{
      this.id = params["id"];
      console.log(this.id)
     
      this.Companyservice.getPatientById(this.id).subscribe({
        next : (res: any[])=>{
          this.allpatientdata = res;
      
        } 
      })
     
    })
    this.Companyservice.getAppointmentByPatientId(this.id).subscribe({
      next: (res)=>{
         this.allAppointmentByPatientId =res; 
         console.log(this.allAppointmentByPatientId, "&&&&&&&apid")
         this.appointmentCount  = this.allAppointmentByPatientId.length
      }
    })
 
  }
  

  addAppointment() {
    this.route.navigate(["super-admin/addappoiment/"+this.id])
  }

  resume(appId:any, pid:any) {
    console.log(appId, pid);

    
  const queryParams = {
      aId : appId,
      patientId : pid

    }
    this.route.navigate(["super-admin/generateprescrption/"], {queryParams})
  }
  

 
  priscription(aId: any, paid:any){
   
    // let queryParams = {
    // aId: aId,
    // pid: paid
    // }
    // this.route.navigate(["/super-admin/priscription"],{queryParams})
    this.Companyservice.getConsultationByAppDocPatientId(aId, paid, this.doctorId).subscribe({
      next: (res)=>{
        this.consultationData =res;
        console.log(this.consultationData)
      }
    })
  }

  editPatient(id: any) {
    this.route.navigate(["/super-admin/patient/add/" + id])
  }

}
