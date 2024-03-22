import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SweetalertService } from 'src/app/shared/sweetalert/sweetalert.service';
import { CompanyService } from '../../../services/company.service';
import { OnInit, ViewChild } from '@angular/core';
import { routes } from 'src/app/core/core.index';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})

export class ScheduleComponent implements OnInit {
  doctorData: any = []
  displayedColumns: string[] = ['Sno', 'Name',
    'SelectDay',
    'StartTime',
    'Endtime',
    'Per Patient Time',
    'Visibility'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  public routes = routes;
  constructor(private route: Router,
    private service: CompanyService,
    private _sweetAlert: SweetalertService
  ) { }
  ngOnInit(): void {
  this.getdata();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  addschedule() {
    this.route.navigate(["super-admin/schedule/add-schedule"])
  }
  editDoctor(pid: any) {
    this.route.navigate(
      ['/admin/product/add'],
      { queryParams: { id: pid } }
    );
  }

  getdata() {
    this.service.getschedules().subscribe(res => {
      this.doctorData = res
      this.dataSource = new MatTableDataSource(this.doctorData);
      console.log("DoctorData",this.doctorData);
    })
  }


  deleteProduct(id: any) {
    console.log(id);
    this._sweetAlert.deleteBtn().then((val) => {
      if (val.isConfirmed) {
        this.service.deletedoctor(id).subscribe({
          next: (res) => {
            const index = this.doctorData.findIndex((doctorData: { _id: any; }) => doctorData._id === id);
            if (index !== -1) {
              this.doctorData.splice(index, 1);
            }
            console.log(res);

          },
          error: (err) => {
            console.log(err)
          }
        })
      }
    })
  }
}
