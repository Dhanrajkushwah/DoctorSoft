import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { routes } from 'src/app/core/core.index';
import { SweetalertService } from 'src/app/shared/sweetalert/sweetalert.service';
import { CompanyService } from '../../../services/company.service';
import { identifierName } from '@angular/compiler';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent {
  displayedColumns: string[] = ['sno', 'specialization','action'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  patientData: any = [];
  // public routes = routes;
  
  constructor(
    private route: Router,
    private service: CompanyService,
    private _sweetAlert: SweetalertService
  ) { }

  ngOnInit(): void {
    this.getDepartment();
  }
  adddepartment() {
    this.route.navigate(["super-admin/department/add-department"])
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  addcoupon() {
    this.route.navigate(["super-admin/patient/add"])
  }

  getDepartment() {
    this.service.getspacialization().subscribe({
      next:(res)=>{
        this.patientData = res
        this.dataSource = new MatTableDataSource(this.patientData);
        this.dataSource.paginator= this.paginator;
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deletespecialization(id:any){
    console.log("deleteid",id)
    this._sweetAlert.deleteBtn().then((val)=>{
      if(val.isConfirmed){
        this.service.deletespacialization(id).subscribe({
          next: (res)=>{
            const index = this.patientData.findIndex((patientData: { id: any; }) => patientData.id === id);
            if (index !== -1) {
              this.patientData.splice(index, 1);
            }
            console.log("data deleted");
          }
        })
      }
    })
    }
 

    
editDoctor(pid: any) {
  this.route.navigate(
    ['/admin/product/add'],
    { queryParams: { id: pid } }
  );
}

    editspecialization(id:any){
      this.route.navigate(["/super-admin/department/add-department/"+id])
    } 
 
  }
