import { Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { SweetalertService } from 'src/app/shared/sweetalert/sweetalert.service';
import { CompanyService } from '../../../services/company.service';
import { routes } from 'src/app/core/core.index';

@Component({
  selector: 'app-medication',
  templateUrl: './medication.component.html',
  styleUrls: ['./medication.component.scss']
})
export class MedicationComponent {
  @Input() medicationPatientId:any
  displayedColumns: string[] = ['sno', 'patientname','medicinename', 'dosage','frequency','timing','duration'];
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
    console.log(this.medicationPatientId, "id")
  }
  
  cancel(){
    this._router.navigate(["/super-admin/medication"])
   }
  
  editDoctors(id:any){
    this._router.navigate(["/super-admin/patient/add/"+id])
  }
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  addPatient() {
    if(this.medicationPatientId){
      this._router.navigate(["super-admin/add-medication/"+this.medicationPatientId])
    }
    else{
      this._router.navigate(["super-admin/add-medication"])
    }
  }
  
  getPatient() {
    this.service.getPatientDocuments().subscribe(res => {
      this.patientData = res
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
  