import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CompanyService } from '../../../services/company.service';
import { SweetalertService } from 'src/app/shared/sweetalert/sweetalert.service';

@Component({
  selector: 'app-sms-schedule',
  templateUrl: './sms-schedule.component.html',
  styleUrls: ['./sms-schedule.component.scss']
})
export class SmsScheduleComponent {



displayedColumns: string[] = ['sno', 'name','department', 'phone', 'email','age','gender','address','action'];
dataSource = new MatTableDataSource();
@ViewChild(MatPaginator)
paginator!: MatPaginator;

patientData: any = [];
constructor(
  private _router: Router,
  private service: CompanyService,
  private _sweetAlert: SweetalertService
) { }

ngOnInit(): void {
  this.getPatient();
}

cancel(){
  this._router.navigate(["/super-admin/smsschedule"])
 }

editDoctors(id:any){
  this._router.navigate(["/super-admin/patient/add/"+id])
}

ngAfterViewInit() {
  this.dataSource.paginator = this.paginator;
}
addPatient() {
  this._router.navigate(["super-admin/patient/add"])
}

getPatient() {
  this.service.getAllPatient().subscribe(res => {
    this.patientData = res
    this.dataSource = new MatTableDataSource(this.patientData);
    this.dataSource.paginator=this.paginator;
  })
}

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}


delete(id:any){
  console.log(id)
  this._sweetAlert.deleteBtn().then((val)=>{
    if(val.isConfirmed){
      this.service.deletepatient(id).subscribe({
        next: (res)=>{
          const index = this.patientData.findIndex((patientData: { id: any; }) => patientData.id === id);
          if (index !== -1) {
            this.patientData.splice(index, 1);
          }
          console.log("therapy deleted");
        }
      })
    }
  })
  }
}
