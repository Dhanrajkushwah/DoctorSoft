import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/component/super-admin/services/company.service';
import { routes } from 'src/app/core/core.index';
import { SweetalertService } from 'src/app/shared/sweetalert/sweetalert.service';

@Component({
  selector: 'app-precription-list',
  templateUrl: './precription-list.component.html',
  styleUrls: ['./precription-list.component.scss']
})
export class PrecriptionListComponent {
  doctorData: any =[];
  doctor: any =[];
  displayedColumns: string[] = ['sno','docimage', 'name', 'email','gender','action'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  public routes = routes;
  constructor(private route: Router,
    private service: CompanyService,
    private _sweetAlert: SweetalertService
  ) { }
  ngOnInit(): void {
    this. getDoctors();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  addProduct() {
    this.route.navigate(["client/prescription-list/view"])
  }
  getDoctors() {
    this.service.getDoctor().subscribe(res => {
      this.doctorData = res
      this.dataSource = new MatTableDataSource(this.doctorData);
      console.log("DoctorData",this.doctorData);
    })

  }
  editDoctor(pid: any) {
    this.route.navigate(
      ['/admin/product/add'],
      { queryParams: { id: pid } }
    );
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



