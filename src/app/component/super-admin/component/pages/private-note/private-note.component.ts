import { Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { SweetalertService } from 'src/app/shared/sweetalert/sweetalert.service';
import { CompanyService } from '../../../services/company.service';
import { routes } from 'src/app/core/core.index';

@Component({
  selector: 'app-private-note',
  templateUrl: './private-note.component.html',
  styleUrls: ['./private-note.component.scss']
})
export class PrivateNoteComponent {
  @Input() privatePatientId:any;
  displayedColumns: string[] = ['name','date', 'note'];
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
    console.log(this.privatePatientId)
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
    if(this.privatePatientId){
      this._router.navigate(["super-admin/add-privatenote/"+ this.privatePatientId])
    }
    else{

      this._router.navigate(["super-admin/add-privatenote"])
    }
  }
  
  getPatient() {
    this.service.getPatientNoteByPatientId(this.privatePatientId).subscribe(res => {
      this.patientData = res
      console.log("Private Node",this.patientData)
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


  