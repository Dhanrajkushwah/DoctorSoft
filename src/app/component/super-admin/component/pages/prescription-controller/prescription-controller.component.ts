import { Component, ElementRef, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-prescription-controller',
  templateUrl: './prescription-controller.component.html',
  styleUrls: ['./prescription-controller.component.scss']
})
export class PrescriptionControllerComponent {
  @ViewChild('content', {static:false}) el!:ElementRef
  public makePDF(): void {

    const elementToPrint: any = document.getElementById('content');
    html2canvas(elementToPrint, { scale: 2 }).then((canvas) => {
      const pdf = new jsPDF();
      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 200, 180);
      pdf.setProperties({
        title: "invoice",
        subject: "Hospital-invoice",
        author: 'Kiaan technology',
      })
      pdf.setFontSize(10);
      pdf.save("prescription.pdf");
    })
  }
}
