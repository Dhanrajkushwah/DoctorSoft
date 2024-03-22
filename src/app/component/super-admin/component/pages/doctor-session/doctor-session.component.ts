import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { routes } from 'src/app/core/core.index';
import { SweetalertService } from 'src/app/shared/sweetalert/sweetalert.service';
import { CompanyService } from '../../../services/company.service';

@Component({
  selector: 'app-doctor-session',
  templateUrl: './doctor-session.component.html',
  styleUrls: ['./doctor-session.component.scss']
})
export class DoctorSessionComponent {
  DoctorseData: any = []
  doctor_id: any
  displayedColumns: string[] = ['sno', 'doctorname','date', 'timeslot', 'department', 'moringstrat', 'moringend', 'evenstart', 'evenend', 'action'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  public routes = routes;
  constructor(private route: Router,
    private service: CompanyService,
    private _sweetAlert: SweetalertService
  ) {
    this.doctor_id = sessionStorage.getItem("admin_id");
  }
  ngOnInit(): void {
    this.getDoctorsSes();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  addSession() {
    this.route.navigate(["super-admin/add-doctorsession"])
  }
  // getDoctorsSes() {
  //   this.service.getDoctorsSession().subscribe(res => {
  //     this.DoctorseData = res
  //     this.dataSource = new MatTableDataSource(this.DoctorseData);
  //     this.dataSource.paginator = this.paginator;
  //     console.log("DoctorsData",this.DoctorseData);
  //   })
  // }

  getDoctorsSes() {
    this.service.getDoctorsSession(this.doctor_id).subscribe(res => {
      // Modify the doctorname field to remove the id
      this.DoctorseData = res.map((doctor: { doctorname: { split: (arg0: string) => [any, any]; }; }) => {
        const [name, id] = doctor.doctorname.split(',');
        return { ...doctor, doctorname: name };
      });

      // Assign the modified data to the MatTableDataSource
      this.dataSource = new MatTableDataSource(this.DoctorseData);
      this.dataSource.paginator = this.paginator;
      console.log("DoctorsData", this.DoctorseData);
    });
  }



  editDoctor(pid: any) {
    this.route.navigate(
      ['/admin/product/add'],
      { queryParams: { id: pid } }
    );
  }

  editDoctors(id: any) {
    this.route.navigate(["/super-admin/add-doctorsession/" + id])
  }


  deleteDoctors(id: any) {
    console.log(id);
    this._sweetAlert.deleteBtn().then((val) => {
      if (val.isConfirmed) {
        this.service.deleteDoctorsSession(id).subscribe({
          next: (res) => {
            const index = this.DoctorseData.findIndex((DoctorseData: { _id: any; }) => DoctorseData._id === id);
            if (index !== -1) {
              this.DoctorseData.splice(index, 1);
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
