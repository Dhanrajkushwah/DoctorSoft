import { Component, Input, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CompanyService } from '../../../services/company.service';
import { SweetalertService } from 'src/app/shared/sweetalert/sweetalert.service';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-lab-package',
  templateUrl: './lab-package.component.html',
  styleUrls: ['./lab-package.component.scss']
})
export class LabPackageComponent {
  displayedColumns: string[] = ['sno', 'image', 'name', 'category', 'price'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  packageData: any = [];
  constructor(
    private route: Router,
    private service: CompanyService,
    private _sweetAlert: SweetalertService
  ) { }

  ngOnInit(): void {
    this.getPackage();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  addLabTest() {
    this.route.navigate(["/super-admin/addlabpackage"])
  }

  getPackage() {
    this.service.getPackage().subscribe(res => {
      this.packageData = res
      this.dataSource = new MatTableDataSource(this.packageData);
      this.dataSource.paginator = this.paginator;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



}
