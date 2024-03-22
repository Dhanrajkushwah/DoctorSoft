import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { routes } from 'src/app/core/core.index';
import { SweetalertService } from 'src/app/shared/sweetalert/sweetalert.service';
import { CompanyService } from '../../../services/company.service';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.scss']
})
export class PrescriptionComponent implements OnInit {
  displayedColumns: string[] = ['sno', 'name','department', 'phone', 'email','age','gender','address'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
 
  patientData: any = [];
  public routes = routes;
  constructor(
    private route: Router,
    private service: CompanyService,
    private _sweetAlert: SweetalertService
  ) { }

  ngOnInit(): void {
    this.getPatient();
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  addPatient() {
    this.route.navigate(["super-admin/prescription/add"])
  }

  getPatient() {
    this.service.getAllPatient().subscribe(res => {
      this.patientData = res
      this.dataSource = new MatTableDataSource(this.patientData);
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
