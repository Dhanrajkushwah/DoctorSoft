import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/auth/authservice/service.service';
import { CompanyService } from 'src/app/component/super-admin/services/company.service';


@Component({
  selector: 'app-my-appointment',
  templateUrl: './my-appointment.component.html',
  styleUrls: ['./my-appointment.component.scss']
})
export class MyAppointmentComponent implements OnInit {

  allAppointment :any = [];
  appByID : any = [];
  patientName : any;
  filteredAppointmentByPatientId : any = [];
  patientId : any;

constructor(
  private service : CompanyService,
  private profileService : ServiceService){

}
ngOnInit(): void {
  this.service.getAppointment().subscribe({
    next : (res)=>{
      this.allAppointment = res;  
    }
  })
this.patientId = sessionStorage.getItem("client_id");
console.log(this.patientId);
this.profileService.GetProfile(this.patientId).subscribe({
  next : (res)=>{
  this.appByID.push(res);
  console.log(this.appByID, "appbyid");

  }
});
this.service.getAppointmentByPatientId(this.patientId).subscribe({
  next : (res)=>{
    // console.log(res, "app of gagan ");
    this.filteredAppointmentByPatientId = res;
    console.log(this.filteredAppointmentByPatientId)
  },
  error : (err)=>{
    console.log(err, "error in get patient by id")
  }
})


};



}
