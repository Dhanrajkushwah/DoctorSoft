import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { CompanyService } from '../../../services/company.service';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-print-prescription',
  templateUrl: './print-prescription.component.html',
  styleUrls: ['./print-prescription.component.scss']
})
export class PrintPrescriptionComponent implements OnInit {
  id: any;
  getinvoiceById:any;

  doctorname:any;
  invoicedate:any;
  invoicenumber:any;
  patientname:any;
  TotalAmount:any;
  Discount:any;
  
  appointmentData: any = [];

  @ViewChild('content', { static: false }) el!: ElementRef
  patientid: any;
  servicename: any;
  quantitys: any;
  prices: any;
  discounts: any;
  descriptions: any;
  constructor(
    private service: CompanyService,
    private activatedRoute : ActivatedRoute,
    ) {
  }
  ngOnInit(): void {

    this.activatedRoute.params.subscribe((params: Params)=>{
      this.id = params["id"];
      console.log(" invoice id ",this.id)
    })
    if(this.id){
      this.service.getinvoiceByPatientId(this.id).subscribe({
        next : (res)=>{
          this.getinvoiceById = res;
          console.log("byid",this.getinvoiceById)
           this.doctorname=this.getinvoiceById[0].doctorName;
           this.invoicedate=this.getinvoiceById[0].invoiceDate;
           this.invoicenumber=this.getinvoiceById[0].invoiceNumber;
           this.patientname=this.getinvoiceById[0].patientName;
           this.patientid=this.getinvoiceById[0].patientId;
           this.servicename=this.getinvoiceById[0].serviceName;
           this.quantitys =this.getinvoiceById[0].quantity;
           this.prices=this.getinvoiceById[0].price;
           this.discounts=this.getinvoiceById[0].discount ;
           this.descriptions=this.getinvoiceById[0].description;
          //  this.TotalAmount=this.getinvoiceById[0].amount;
           this.Discount=this.getinvoiceById[0].discount;
           this.TotalAmount=this.getinvoiceById[0].totalAmountCalc;
           
        }
      })
    }
  
   
  }

  public makePDF(): void {
    const elementToPrint: any = document.getElementById('content');
    html2canvas(elementToPrint, { scale: 2 }).then((canvas) => {
      const pdf = new jsPDF();
      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 200, 220);
      pdf.setProperties({
        title: "invoice",
        subject: "Hospital-invoice",
        author: 'Kiaan technology',
      })
      pdf.setFontSize(11);
      pdf.save("invoice.pdf");
    })
  }

  // getInvoice() {
  //   this.service.getinvoice().subscribe(res => {
  //     this.appointmentData= res
  //     console.log(this.appointmentData)
  //   })
  // }

//   getinvoiceById(){
//   this.service.getinvoiceById(this.id).subscribe(res => {
//     this.appointmentData= res
//     console.log(this.appointmentData)
//   })
// }
}


