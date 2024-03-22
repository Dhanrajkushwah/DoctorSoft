import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from '../../../services/company.service';
import { SweetalertService } from 'src/app/shared/sweetalert/sweetalert.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { routes } from 'src/app/core/core.index';

@Component({
  selector: 'app-video-call',
  templateUrl: './video-call.component.html',
  styleUrls: ['./video-call.component.scss']
})
export class VideoCallComponent {
  displayedColumns: string[] = ['sno', 'name','dateapp','slot', 'link'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  getAppointmentById :any = [];
  doctor_id:any
  meetingData: any = [];
  public routes = routes;
  constructor(
    private route: Router,
    private service: CompanyService,
    private _sweetAlert: SweetalertService
  ) { 
    this.doctor_id = sessionStorage.getItem("admin_id");
  }

  ngOnInit(): void {
    this.getMeeting();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getMeeting() {
    this.service.getMeetingbyid(this.doctor_id).subscribe(res => {
      this.meetingData= res
      this.dataSource = new MatTableDataSource(this.meetingData);
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
