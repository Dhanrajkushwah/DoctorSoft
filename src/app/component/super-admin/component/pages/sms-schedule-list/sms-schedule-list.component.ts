import { Component, ViewChild, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { SweetalertService } from 'src/app/shared/sweetalert/sweetalert.service';
import { CompanyService } from '../../../services/company.service';
import { routes } from 'src/app/core/core.index';

@Component({
  selector: 'app-sms-schedule-list',
  templateUrl: './sms-schedule-list.component.html',
  styleUrls: ['./sms-schedule-list.component.scss']
})
export class SmsScheduleListComponent {
  @Input() PatientId:any
  displayedColumns: string[] = ['dates','type', 'Attachments','date'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  
  patientData: any = [];
  // patientId :any;
  constructor(
    private _router: Router,
    private service: CompanyService,
    private _sweetAlert: SweetalertService,
    private actRoute : ActivatedRoute
  ) { 
   
  }
  
  ngOnInit(): void {

    console.log(this.PatientId)
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
   if(this.PatientId){
    this._router.navigate(["super-admin/patientdocument/"+this.PatientId])
   }
 else{
   this._router.navigate(["super-admin/patientdocument"])
     }
    }
  
  
  getPatient() {
    this.service.getLoggedPatientDocumentsById(this.PatientId).subscribe(res => {
      this.patientData = res
      console.log(this.patientData)
      this.dataSource = new MatTableDataSource(this.patientData);
      this.dataSource.paginator=this.paginator;
    })
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  
  uploadDocument(id:any){
    console.log(id);
    window.open(id)
    }
  }
  