import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/component/super-admin/services/company.service';
import { SweetalertService } from 'src/app/shared/sweetalert/sweetalert.service';
import { routes } from 'src/app/core/core.index';

@Component({
  selector: 'app-my-invoices',
  templateUrl: './my-invoices.component.html',
  styleUrls: ['./my-invoices.component.scss']
})
export class MyInvoicesComponent implements OnInit {
  patientId:any;
  allInvoiceData:any =[];
   InvoicePatientId:any;
  displayedColumns: string[] = ['invoiceNumber', 'invoiceDate', 'doctorName' ,  'totalAmount','pendingBalance','action'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  getAppointmentById :any = [];
  appointmentData: any = [];
  public routes = routes;
  constructor(
    private route: Router,
    private service: CompanyService,
   
  ) { }

  ngOnInit(): void {
    this.patientId = sessionStorage.getItem("client_id");
    this.getInvoice();
  
    console.log(this.patientId)
    
  }
 
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

 
  
  getInvoice() {
    this.service.getinvoiceByPatientId(this.patientId).subscribe(res => {
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
 
viewInvoice(id:any){
  this.route.navigate(["/super-admin/invoice/print/"+id])
}

}
