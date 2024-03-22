import { Component, Input, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CompanyService } from '../../../services/company.service';
import { SweetalertService } from 'src/app/shared/sweetalert/sweetalert.service';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { routes } from 'src/app/core/core.index';

@Component({
  selector: 'app-laboratory-list',
  templateUrl: './laboratory-list.component.html',
  styleUrls: ['./laboratory-list.component.scss']
})
export class LaboratoryListComponent {
  @Input() InvoicePatientId: any;
  displayedColumns: string[] = ['invoiceNumber', 'invoiceDate', 'patientName', 'totalAmount', 'pendingBalance', 'action'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  getAppointmentById: any = [];
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
    this.route.navigate(["/super-admin/laboratory/add/"])
  }

  getInvoice() {
    this.service.getinvoiceByPatientId(this.InvoicePatientId).subscribe(res => {
      this.appointmentData = res
      console.log(this.appointmentData)
      this.dataSource = new MatTableDataSource(this.appointmentData);
      this.dataSource.paginator = this.paginator;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deletePhysicalHealthsssssss(id: any) {
    console.log(id)
    this._sweetAlert.deleteBtn().then((val) => {
      if (val.isConfirmed) {
        this.service.deletePhysicalHealth(id).subscribe({
          next: (res) => {
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

  viewInvoice(id: any) {
    this.route.navigate(["/super-admin/invoice/print/" + id])
  }
}
