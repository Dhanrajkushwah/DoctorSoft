import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { CompanyService } from '../../../services/company.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-new-priscription',
  templateUrl: './new-priscription.component.html',
  styleUrls: ['./new-priscription.component.scss']
})
export class NewPriscriptionComponent implements OnInit {
doctorId :any;
appointmentId :any;
patientId:any;
allConsultationData:any = [];
allPatientData:any = [];
allDoctorData:any = [];
appointmentData: any = [];
medicationArray : any= [];
  @ViewChild('content', { static: false }) el!: ElementRef
  constructor(
    private company : CompanyService,
    private route : ActivatedRoute
    ) {}
  public makePDF(): void {
    const elementToPrint: any = document.getElementById('content');
    html2canvas(elementToPrint, { scale: 2 }).then((canvas) => {
      const pdf = new jsPDF();
      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 230, 220);
      pdf.setProperties({
        title: "invoice",
        subject: "Hospital-invoice",
        author: 'Kiaan technology',
      })
      pdf.setFontSize(11);
      pdf.save("invoice.pdf");
    })
  }

  ngOnInit(): void {
 this.doctorId = sessionStorage.getItem('admin_id');
 
 const snapshot = this.route.snapshot;
 this.appointmentId = snapshot.queryParams["appId"];
 this.patientId = snapshot.queryParams["pid"];
 
  
 

  this.company.getConsultationByAppDocPatientId(this.appointmentId, this.patientId, this.doctorId).subscribe({
    next: (res)=>{
      console.log(res)
      this.allConsultationData = res;
      console.log(this.allConsultationData)
     this.medicationArray = JSON.parse(res[0].medication);
     console.log(this.medicationArray)

    }
  })
  this.company.getPatientById(this.patientId).subscribe({
    next: (res)=>{
      this.allPatientData= res;
      console.log(this.allPatientData)
    }
  })
  this.company.getdoctorById(this.doctorId).subscribe({
    next: (res)=>{
      this.allDoctorData.push(res);
      console.log(this.allDoctorData)
    }
  })

  this.company.getAppointmentById(this.appointmentId).subscribe({
    next: (res)=>{
     this.appointmentData = res;
     console.log(this.appointmentData)
    }
  })
 

 
  }

}
