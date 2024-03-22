import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/component/super-admin/services/company.service';

@Component({
  selector: 'app-private-note-patient',
  templateUrl: './private-note-patient.component.html',
  styleUrls: ['./private-note-patient.component.scss']
})
export class PrivateNotePatientComponent implements OnInit {
patientId : any;
loggedPatientData:any
constructor(private service : CompanyService){

}
ngOnInit(): void {
  this.patientId = sessionStorage.getItem('client_id');
  this.service.getPatientNoteByPatientId(this.patientId).subscribe({
    next: (res)=>{
      console.log(res);
      this.loggedPatientData =res;
    }
  })
}
}
