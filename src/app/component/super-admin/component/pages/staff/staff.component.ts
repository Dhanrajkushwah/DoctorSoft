import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { routes } from 'src/app/core/core.index';
import { SweetalertService } from 'src/app/shared/sweetalert/sweetalert.service';
import { CompanyService } from '../../../services/company.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent {
  staffData: any =[]
  displayedColumns: string[] = ['sno','hosimage', 'name', 'email', 'department','experience','role','gender','address','phone'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  public routes = routes;
  constructor(private route: Router,
    private service: CompanyService,
    private _sweetAlert: SweetalertService
  ) { }
  ngOnInit(): void {
    this. getStaff();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  addProduct() {
    this.route.navigate(["super-admin/staff/add-resgister"])
  }
  getStaff() {
    this.service.getStaff().subscribe(res => {
      this.staffData = res
      this.dataSource = new MatTableDataSource(this.staffData);
      console.log("HospitalData",this.staffData);
    })

  }
  editDoctor(id: any) {
    this.route.navigate(
      ['/super-admin/staff/add-resgister'],
      { queryParams: { id: id } }
    );
  }
  deletehospital(id: any) {
    console.log(id);
    this._sweetAlert.deleteBtn().then((val) => {
      if (val.isConfirmed) {
        this.service.deleteHospital(id).subscribe({
          next: (res) => {
            const index = this.staffData.findIndex((hospitalData: { _id: any; }) => hospitalData._id === id);
				if (index !== -1) {
				  this.staffData.splice(index, 1);
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
