import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { CompanyService } from '../../../services/company.service';
import { SweetalertService } from 'src/app/shared/sweetalert/sweetalert.service';
import { MatTableDataSource } from '@angular/material/table';
// import { routes } from 'src/app/core/core.index';

@Component({
  selector: 'app-prescription-page',
  templateUrl: './prescription-page.component.html',
  styleUrls: ['./prescription-page.component.scss']
})
export class PrescriptionPageComponent {
  displayedColumns: string[] = ['sno', 'therapy', 'action'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  getAppointmentById :any = [];

 
  appointmentData: any = [];
  constructor(
    private route: Router,
    private service: CompanyService,
    private _sweetAlert: SweetalertService
  ) { }

  ngOnInit(): void {
    this.gettherapy();
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  addtherapiesss() {
    this.route.navigate(["super-admin/prescription/add"])
    // this.route.navigate(["super-admin/appointmentlist/add"])
  }

  gettherapy() {
    this.service.getTherapy().subscribe(res => {
      this.appointmentData= res
      console.log(this.appointmentData)
      this.dataSource = new MatTableDataSource(this.appointmentData);
      this.dataSource.paginator = this.paginator;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  edittherapysss(id:any){
    this.route.navigate(["/super-admin/prescription/add/"+id])
  }

  deletetherapy(id:any){
    console.log(id)
    this._sweetAlert.deleteBtn().then((val)=>{
      if(val.isConfirmed){
        this.service.deleteTherapy(id).subscribe({
          next: (res)=>{
            const index = this.appointmentData.findIndex((appointmentData: { id: any; }) => appointmentData.id === id);
            if (index !== -1) {
              this.appointmentData.splice(index, 1);
            }
            console.log("therapy deleted");
          }
        })
      }
    })
    }

  // viewPrescription(id:any){
  //  this.route.navigate(["/super-admin/viewprescription"], { queryParams: { id: id } })
  // }

}
