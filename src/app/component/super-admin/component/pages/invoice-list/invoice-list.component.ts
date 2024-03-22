import { Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SweetalertService } from 'src/app/shared/sweetalert/sweetalert.service';
import { CompanyService } from '../../../services/company.service';
import { Router } from '@angular/router';
import { routes } from 'src/app/core/core.index';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent {
  @Input() InvoicePatientId:any;
  displayedColumns: string[] = ['invoiceNumber', 'invoiceDate', 'patientName' ,  'totalAmount','action'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  getAppointmentById :any = [];
  appointmentData: any = [];
  public routes = routes;
  constructor(
    private route: Router,
    private service: CompanyService,
    private _sweetAlert: SweetalertService
  ) { }

  ngOnInit(): void {
    this.getInvoice();
    
  }
 
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  addInvoice() {
    if(this.InvoicePatientId){
      this.route.navigate(["/super-admin/invoice/add/"+ this.InvoicePatientId])
    }
    else{

      this.route.navigate(["/super-admin/invoice/add"])
    }
  }
  
  getInvoice() {
    this.service.getinvoiceByPatientId(this.InvoicePatientId).subscribe(res => {
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
  deletePhysicalHealthsssssss(id:any){
    console.log(id)
    this._sweetAlert.deleteBtn().then((val)=>{
      if(val.isConfirmed){
        this.service.deletePhysicalHealth(id).subscribe({
          next: (res)=>{
            const index = this.appointmentData.findIndex((appointmentData: { id: any; }) => appointmentData.id === id);
            if (index !== -1) {
              this.appointmentData.splice(index, 1);
            }
            console.log("data deleted");
          }
        })
      }
    })
    }
viewInvoice(id:any){
  this.route.navigate(["/super-admin/invoice/print/"+id])
}
}
