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
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent {
  doctorData: any = []
  stateData: any = []
  cityData: any = []
  dataSend: any
  stateName: any
  cityName: any
  dateTo: any
  dateFrom: any
  displayedColumns: string[] = ['sno', 'docimage', 'doctorname', 'email', 'speciality', 'role', 'phone', 'status', 'verifiy', 'action'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  public routes = routes;
  constructor(private route: Router, public dialog: MatDialog,
    private service: CompanyService,
    private _sweetAlert: SweetalertService
  ) { }
  ngOnInit(): void {
    // this.service.getdoctor().subscribe(res => {
    //   this.doctorData = res
    //   this.dataSource = new MatTableDataSource(this.doctorData);
    //   this.dataSource.paginator = this.paginator;
    //   console.log("DoctorData", this.doctorData);
    // })
    this.getStates();
    this.getDoctors();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  addProduct() {
    this.route.navigate(["super-admin/doctor/add-doctor-update"])
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
    this.getDoctors()
  }
  getDoctors() {
    this.service.getdoctors(this.stateName, this.cityName, this.dateTo, this.dateFrom).subscribe(res => {
      this.doctorData = res
      this.dataSource = new MatTableDataSource(this.doctorData);
      this.dataSource.paginator = this.paginator;
      console.log("DoctorData", this.doctorData);
    })
  }
  changeTo(dateTo: any) {
    console.log(dateTo);
    this.getDoctors()

  }
  changeFrom(dateFrom: any) {
    console.log(dateFrom);
    this.getDoctors()

  }
  reset() {
    this.dateFrom = undefined
    this.dateTo = undefined
    this.stateData = undefined
    this.cityData = undefined
    this.stateName= undefined
    this.cityName= undefined
    this.getDoctors();
  }
  editDoctor(pid: any) {
    this.route.navigate(
      ['/admin/product/add'],
      { queryParams: { id: pid } }
    );
  }

  verified(data: any) {
    var id = data._id
    this.dataSend = {
      drStatus: "true"
    }

    this.service.approveDoctor(id, this.dataSend).subscribe(res => {
      if (res) {
        this.getDoctors()
      }

    })
  }

  openDialog(data: any): void {
    const dialogRef = this.dialog.open(DoctorViewComponent, {
      data: { data },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
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

