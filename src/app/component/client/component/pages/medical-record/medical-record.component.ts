import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/component/super-admin/services/company.service';

@Component({
  selector: 'app-medical-record',
  templateUrl: './medical-record.component.html',
  styleUrls: ['./medical-record.component.scss']
})
export class MedicalRecordComponent implements OnInit {
  loggedPatientId : any
  loggedPatientData : any =[];
  constructor(
    private router: Router,
    private service : CompanyService
    ){

  }
  toMedicalRecord(){
this.router.navigate(["/super-admin/patientdocument"])
  }
  ngOnInit(): void {
    this.loggedPatientId = sessionStorage.getItem('client_id');
    console.log(this.loggedPatientId);
   this.service.getLoggedPatientDocumentsById(this.loggedPatientId).subscribe({
    next: (res)=>{
      console.log(res)
   this.loggedPatientData = res;
    }
   })
  }
  download(img:any){
   console.log(img);
   const link = document.createElement('a');
    link.href = img;
    link.download = "document.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

}
