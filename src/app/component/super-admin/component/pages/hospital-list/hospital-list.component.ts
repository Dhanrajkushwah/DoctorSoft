import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { routes } from 'src/app/core/core.index';
import { SweetalertService } from 'src/app/shared/sweetalert/sweetalert.service';
import { CompanyService } from '../../../services/company.service';

@Component({
  selector: 'app-hospital-list',
  templateUrl: './hospital-list.component.html',
  styleUrls: ['./hospital-list.component.scss']
})
export class HospitalListComponent {
  hospitalData: any =[]
  displayedColumns: string[] = ['sno','hosimage', 'name', 'email', 'department','descrption','role','address','phone'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  public routes = routes;
  constructor(private route: Router,
    private service: CompanyService,
    private _sweetAlert: SweetalertService
  ) { }
  ngOnInit(): void {
    this. getHospital();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  addProduct() {
    this.route.navigate(["super-admin/hospital/add-hospital"])
  }
  getHospital() {
    this.service.getHospital().subscribe(res => {
      this.hospitalData = res
      this.dataSource = new MatTableDataSource(this.hospitalData);
      console.log("HospitalData",this.hospitalData);
    })

  }
  editDoctor(id: any) {
    this.route.navigate(
      ['/super-admin/hospital/add-hospital'],
      { queryParams: { id: id } }
    );
  }
  deletehospital(id: any) {
    console.log(id);
    this._sweetAlert.deleteBtn().then((val) => {
      if (val.isConfirmed) {
        this.service.deleteHospital(id).subscribe({
          next: (res) => {
            const index = this.hospitalData.findIndex((hospitalData: { _id: any; }) => hospitalData._id === id);
				if (index !== -1) {
				  this.hospitalData.splice(index, 1);
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
