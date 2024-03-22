import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { routes } from 'src/app/core/core.index';
import { SweetalertService } from 'src/app/shared/sweetalert/sweetalert.service';


@Component({
  selector: 'app-send-custom-email',
  templateUrl: './send-custom-email.component.html',
  styleUrls: ['./send-custom-email.component.scss']
})
export class SendCustomEmailComponent {
  displayedColumns: string[] = ['Sno', 'Email', 'Subject'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
 
  patientData: any = [];
  public routes = routes;
  constructor(
    private route: Router,
    private _sweetAlert: SweetalertService
  ) { }

  ngOnInit(): void {
    // this.getDepartment();
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  addcoupon() {
    this.route.navigate(["super-admin/patient/add"])
  }

  // getDepartment() {
  //   this.service.getAllDepartment().subscribe(res => {
  //     this.patientData = res
  //     this.dataSource = new MatTableDataSource(this.patientData);
  //   })
  // }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addsendopen() {
    this.route.navigate(["super-admin/sendcustomemail/add-sendcustomemail"])
  }

}
