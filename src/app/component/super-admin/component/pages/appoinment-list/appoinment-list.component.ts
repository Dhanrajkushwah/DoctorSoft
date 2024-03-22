import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from '../../../services/company.service';
import { SweetalertService } from 'src/app/shared/sweetalert/sweetalert.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { routes } from 'src/app/core/core.index';

@Component({
  selector: 'app-appoinment-list',
  templateUrl: './appoinment-list.component.html',
  styleUrls: ['./appoinment-list.component.scss']
})
export class AppoinmentListComponent {
  displayedColumns: string[] = ['sno', 'name','dateapp','slot','date', 'age','gender', 'phone','email','location', 'resume'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  getAppointmentById :any = [];
  doctor_id:any
  appointmentData: any = [];
  public routes = routes;
  currentData: Date = new Date();
  constructor(
    private route: Router,
    private service: CompanyService,
    private _sweetAlert: SweetalertService,
    private cdr: ChangeDetectorRef
  ) { 
    this.doctor_id = sessionStorage.getItem("admin_id");

  }

  ngOnInit(): void {
    this.getcoupon();
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  addcoupon() {
    this.route.navigate(["super-admin/addappoiment"])
  }

  getcoupon() {
    this.service.getAppointmentbyid(this.doctor_id).subscribe(res => {
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
  deleteAppointment(obj:any){
   
    this._sweetAlert.deleteBtn().then((val)=>{
      if(val.isConfirmed){
       this.service.deleteAppointmentById(obj._id).subscribe({
        next:(res)=>{
          console.log("data deleted", res);
          this.ngOnInit()
        }
       })
      }
    })
  }
  editAppointment(obj:any){
  this.route.navigate(["/super-admin/appointmentlist/add/edit/"+ obj._id])
  }

  toConsultation(id:any){
   this.route.navigate(["/super-admin/generateprescrption/"+id])
  }

  incrementDate(): void {
    this.currentData.setDate(this.currentData.getDate() + 1);
    this.cdr.detectChanges()
    console.log(this.currentData)
  }

  decrementDate(): void {
    this.currentData.setDate(this.currentData.getDate() - 1);
    this.cdr.detectChanges()
    console.log(this.currentData)
  }

}
