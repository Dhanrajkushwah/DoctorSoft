import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/component/super-admin/services/company.service';
import { routes } from 'src/app/core/core.index';
import { SweetalertService } from 'src/app/shared/sweetalert/sweetalert.service';

@Component({
  selector: 'app-appointment-view',
  templateUrl: './appointment-view.component.html',
  styleUrls: ['./appointment-view.component.scss']
})
export class AppointmentViewComponent {
  displayedColumns: string[] = ['sno', 'doctorName','date','slotTime' , 'link'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  getAppointmentById :any = [];
  patientId
  consultationData: any = [];
  public routes = routes;
  constructor(
    private route: Router,
    private service: CompanyService,
    private _sweetAlert: SweetalertService
  ) { 
    this.patientId = sessionStorage.getItem("client_id");
  }

  ngOnInit(): void {
    this.getVideoConsultation();
  }
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getVideoConsultation() {
    this.service.getPatientMeetingbyid(this.patientId).subscribe(res => {
      this.consultationData= res
      this.dataSource = new MatTableDataSource(this.consultationData);
      this.dataSource.paginator = this.paginator;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  copyData(value:any) {
    console.log(value);
  }

}
