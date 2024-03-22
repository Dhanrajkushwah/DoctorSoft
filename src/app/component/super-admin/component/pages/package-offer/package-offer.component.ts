import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { SweetalertService } from 'src/app/shared/sweetalert/sweetalert.service';
import { CompanyService } from '../../../services/company.service';

@Component({
  selector: 'app-package-offer',
  templateUrl: './package-offer.component.html',
  styleUrls: ['./package-offer.component.scss']
})
export class PackageOfferComponent implements OnInit {


  displayedColumns: string[] = ['sno', 'offerTitle', 'offerName', 'offertestPackage', 'offerPrice'];
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
    // this.getPackage();
    this.getoofferPackage();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  addLabTest() {
    this.route.navigate(["/super-admin/addpackageoffer"])
  }

  // getPackage() {
  //   this.service.getPackage().subscribe(res => {
  //     this.packageData = res
  //     this.dataSource = new MatTableDataSource(this.packageData);
  //     this.dataSource.paginator = this.paginator;
  //   })
  // }


  getoofferPackage() {
    this.service.getofferpackage().subscribe(res => {
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
