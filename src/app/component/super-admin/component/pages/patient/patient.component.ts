import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from 'src/app/core/core.index';
import { SweetalertService } from 'src/app/shared/sweetalert/sweetalert.service';
import { CompanyService } from '../../../services/company.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

import ZoomMtgEmbedded from "@zoomus/websdk/embedded"
import { ZoomService } from '../../../services/zoom.service';
import { ZoomMtg } from '@zoomus/websdk';
@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {
  displayedColumns: string[] = ['sno', 'name', 'bloodgroup', 'phone', 'email', 'dateofbirth', 'age', 'gender', 'location', 'action'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  stateData: any = []
  cityData: any = []
  dataSend: any
  stateName: any
  cityName: any
  doctor_id: any
  patientData: any = [];
  public routes = routes;
  
  constructor(
    private route: Router,
    private service: CompanyService,
    private _sweetAlert: SweetalertService,
  ) {
    this.doctor_id = sessionStorage.getItem("admin_id");
  }

  ngOnInit(): void {
    this.getPatient();
    this.getStates();

    
  }

  editPatient(id: any) {
    this.route.navigate(["/super-admin/patient/add/" + id])
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  addPatient() {
    this.route.navigate(["super-admin/patient/add"])
  }
  getStates() {
    this.service.getStateDoctor().subscribe(res => {
      this.stateData = res
      console.log("stateData", this.stateData);
    })
  }
  getCitys(event: any) {
    this.stateName = event.target.value
    console.log(this.stateName);
    this.service.getCityDoctor(this.stateName).subscribe(res => {
      this.cityData = res
    })
  }
  getCityChanges(event: any) {
    this.cityName = event.target.value
    console.log(this.cityName);
    this.getPatient()
  }
  getPatient() {
    this.service.getAllPatientbydoctor( this.stateName,this.cityName,this.doctor_id).subscribe(res => {
      this.patientData = res
      console.log("Get Patient Data", this.patientData);
      this.dataSource = new MatTableDataSource(this.patientData);
      this.dataSource.paginator = this.paginator;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  reset() {
    this.stateData = undefined
    this.cityData = undefined
    this.stateName= undefined
    this.cityName= undefined
    this.getPatient();
  }

  delete(id: any) {
    console.log(id)
    this._sweetAlert.deleteBtn().then((val) => {
      if (val.isConfirmed) {
        this.service.deletepatient(id).subscribe({
          next: (res) => {
            const index = this.patientData.findIndex((patientData: { id: any; }) => patientData.id === id);
            if (index !== -1) {
              this.patientData.splice(index, 1);
            }
            console.log("therapy deleted");
          }
        })
      }
    })
  }
}
