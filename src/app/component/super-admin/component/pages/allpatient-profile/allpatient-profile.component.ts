import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../../services/company.service';
import { Router } from '@angular/router';
import { toJSDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-allpatient-profile',
  templateUrl: './allpatient-profile.component.html',
  styleUrls: ['./allpatient-profile.component.scss'],
})
export class AllpatientProfileComponent implements OnInit {
  patientData: any;
  patientallData: any;
  res: any
  allpatientcount:any
  allpatientrecentcount:any
  date = new Date();
  dates:any
  stateName= undefined;
  cityName= undefined;
  doctorId : any;

  constructor(
    private route: Router,
    private service: CompanyService,
    private datePipe:DatePipe
  ) {
    this.doctorId = sessionStorage.getItem('admin_id')
   }

  ngOnInit(): void {
    this.getPatient();
    this.getToday();
  }
  getToday(): string {
    return this.dates= new Date().toISOString().split('T')[0]
  }
  getPatient() {
    this.service.getAllPatientbydoctor(this.stateName, this.cityName, this.doctorId).subscribe(res => {
      this.patientData = res.filter((ele:any) =>
      this.datePipe.transform(ele.createdAt,'YYYY-MM-dd')!==this.datePipe.transform(new Date(),'YYYY-MM-dd')
      )
      this.patientallData = res.filter((ele:any) =>
      this.datePipe.transform(ele.createdAt,'YYYY-MM-dd')==this.datePipe.transform(new Date(),'YYYY-MM-dd')
      )
      this.allpatientrecentcount=this.patientallData.length
      this.allpatientcount=this.patientData.length
    })
  }

  openpatienthistory(id: any) {
    this.route.navigate(["/super-admin/allpatient/" + id])
  }
}
