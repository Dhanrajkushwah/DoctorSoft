import { Component, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyService } from '../../../services/company.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-laboratory',
  templateUrl: './laboratory.component.html',
  styleUrls: ['./laboratory.component.scss']
})
export class LaboratoryComponent {

  @Input() InvoicePatientId:any;
  displayedColumns: string[] = ['sno', 'categoryImage' , 'category'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  // public routes = routes;

  appointmentbookform!: FormGroup;
  ck: boolean = false;
  labtest: any = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: CompanyService) {
  }

 
  ngOnInit(): void {
    this.getlabtests();

  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  addProduct() {
    this.router.navigate(["super-admin/category"])
  }

  getlabtests() {
    this.service.getlabtest( ).subscribe(res => {
      this.labtest = res
      console.log("Get labtest Data", this.labtest);
      this.dataSource = new MatTableDataSource(this.labtest);
      this.dataSource.paginator = this.paginator;
    })
  }
  }


