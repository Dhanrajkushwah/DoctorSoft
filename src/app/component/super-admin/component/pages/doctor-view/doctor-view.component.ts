import { Component, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Data, Router } from '@angular/router';
import { routes } from 'src/app/core/core.index';
import { SweetalertService } from 'src/app/shared/sweetalert/sweetalert.service';
import { CompanyService } from '../../../services/company.service';


@Component({
  selector: 'app-doctor-view',
  templateUrl: './doctor-view.component.html',
  styleUrls: ['./doctor-view.component.scss']
})

export class DoctorViewComponent {
  doctorData: any = []
  public routes = routes;
  allData: any
  constructor(private route: Router, public dialog: MatDialog,
    private service: CompanyService,
    private _sweetAlert: SweetalertService,
    public dialogRef: MatDialogRef<DoctorViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

  ) {
    this.allData = this.data.data
    console.log(this.allData);
  }

  ngOnInit(): void {
    console.log("ngoninit",this.data.data);
  }

  addProduct() {
    this.route.navigate(["super-admin/doctor/add-doctor"])
  }
  editDoctor(pid: any) {
    this.route.navigate(
      ['/admin/product/add'],
      { queryParams: { id: pid } }
    );
  }
  openDialog(data: any): void {
    const dialogRef = this.dialog.open(DoctorViewComponent, {
      data: { name: data },
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
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

