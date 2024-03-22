import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SweetalertService } from 'src/app/shared/sweetalert/sweetalert.service';
import { CompanyService } from '../../../services/company.service';
import { OnInit, ViewChild } from '@angular/core';
import { routes } from 'src/app/core/core.index';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { AddDoctorComponent } from '../../shared/add-doctor/add-doctor.component';
import { DoctorViewComponent } from '../doctor-view/doctor-view.component';

@Component({
  selector: 'app-doctor-info',
  templateUrl: './doctor-info.component.html',
  styleUrls: ['./doctor-info.component.scss']
})
export class DoctorInfoComponent {
  doctorData: any = []
  doctor_id:any
  name:any
  mobile:any
  email:any
  city:any
  public routes = routes;
  constructor(private route: Router, public dialog: MatDialog,
    private service: CompanyService,
    private _sweetAlert: SweetalertService
  ) {
    this.doctor_id = sessionStorage.getItem("admin_id");

  }
  ngOnInit(): void {
    this.getDoctorProfile();
  }

  getDoctorProfile() {
    this.service.GetProfile(this.doctor_id).subscribe(res => {
      this.doctorData = res
     this.name= this.doctorData.firstName+' '+ this.doctorData.middleName+" "+this.doctorData.lastName
     this.mobile=this.doctorData.mobileno
     this.email=this.doctorData.email
     this.city=this.doctorData.city
      console.log("DoctorData", this.doctorData);
    })
  }
  editDoctor(doctor_id :any) {
    this.route.navigate(
      ['/super-admin/doctor/add-doctor/'+doctor_id]
    );
  }


}

