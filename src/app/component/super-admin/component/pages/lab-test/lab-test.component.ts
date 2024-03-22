import { Component, Input, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CompanyService } from '../../../services/company.service';
import { SweetalertService } from 'src/app/shared/sweetalert/sweetalert.service';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { routes } from 'src/app/core/core.index';

@Component({
  selector: 'app-lab-test',
  templateUrl: './lab-test.component.html',
  styleUrls: ['./lab-test.component.scss']
})
export class LabTestComponent {
  displayedColumns: string[] = ['sno', 'image', 'name', 'category', 'price'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  labtestData: any = [];
  constructor(
    private route: Router,
    private service: CompanyService,
    private _sweetAlert: SweetalertService
  ) { }

  ngOnInit(): void {
    this.getLabtest();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  addLabTest() {
    this.route.navigate(["/super-admin/addlabtest"])
  }

  getLabtest() {
    this.service.getLabtest().subscribe(res => {
      this.labtestData = res
      this.dataSource = new MatTableDataSource(this.labtestData);
      this.dataSource.paginator = this.paginator;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
