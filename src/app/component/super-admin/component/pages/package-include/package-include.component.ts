import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CompanyService } from '../../../services/company.service';

@Component({
  selector: 'app-package-include',
  templateUrl: './package-include.component.html',
  styleUrls: ['./package-include.component.scss']
})
export class PackageIncludeComponentb implements OnInit {

  @Input() InvoicePatientId:any;
  displayedColumns: string[] = ['sno','testpackageName', 'testpackageDescription '];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  // public routes = routes;
  
  appointmentbookform!: FormGroup;
  // ck: boolean = false;
  testpkg: any = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: CompanyService) {
  }

 
  ngOnInit(): void {
    this.gettestpackages();

  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  addProduct() {
    this.router.navigate(["super-admin/addpackageinclude"])
  }

  gettestpackages() {
    this.service.gettestpackage( ).subscribe(res => {
      this.testpkg = res
      console.log("Get labtest Data", this.testpkg);
      this.dataSource = new MatTableDataSource(this.testpkg);
      this.dataSource.paginator = this.paginator;
    })
  }

}
