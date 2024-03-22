import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CompanyService } from '../../../services/company.service';
import { SweetalertService } from 'src/app/shared/sweetalert/sweetalert.service';
import { routes } from 'src/app/core/core.index';

@Component({
  selector: 'app-sms-template-list',
  templateUrl: './sms-template-list.component.html',
  styleUrls: ['./sms-template-list.component.scss']
})
export class SmsTemplateListComponent {
  drugData: any =[]
  displayedColumns: string[] = ['sno','templateName','action' ];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  public routes = routes;
  constructor(private route: Router,
    private service: CompanyService,
    private _sweetAlert: SweetalertService
  ) { }
  ngOnInit(): void {
    this. getDrugs();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
 
  getDrugs() {
    this.service.getDrugs().subscribe(res => {
      this.drugData = res
      this.dataSource = new MatTableDataSource(this.drugData);
      console.log("drugData",this.drugData);
    })

  }
  editDoctor(pid: any) {
    this.route.navigate(
      ['/admin/product/add'],
      { queryParams: { id: pid } }
    );
  }
  deletedrug(id: any) {
    console.log(id);
    this._sweetAlert.deleteBtn().then((val) => {
      if (val.isConfirmed) {
        this.service.deletedru(id).subscribe({
          next: (res) => {
            const index = this.drugData.findIndex((drugData: { _id: any; }) => drugData._id === id);
				if (index !== -1) {
				  this.drugData.splice(index, 1);
				}
            console.log(res);
       
          },
          error: (err) => {
            console.log(err)
          }
        })
      }
    })
}

addSMSForm(){
  this.route.navigate(["/super-admin/smstemplate"])
}
}
