import { Component, OnInit } from '@angular/core';

import { routes } from 'src/app/core/helpers/routes';
import { SweetalertService } from 'src/app/shared/sweetalert/sweetalert.service';
import { CompanyService } from '../../../services/company.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  public routes = routes;

  public company: any = [];

  constructor(
    private _company: CompanyService,
    private _alert: SweetalertService,
    private route:Router
  ) { }

  ngOnInit(): void {
    this._company.getCompany().subscribe({
      next: (res) => {
        this.company = res;
        console.log(res)
      },
      error: (err) => {
        console.log(err)
      },
    })
  }

  OnDelete(id: string) {
    console.log(id)
    this._alert.deleteBtn().then((val) => {
      if (val.isConfirmed) {
        this._company.deleteCompany(id).subscribe({
          next: (res) => {
            const index = this.company.findIndex((company: { _id: any; }) => company._id === id);
            if (index !== -1) {
              this.company.splice(index, 1);
            }
            console.log(res);
          }
        })
      }
    })
  }
  addCompany(){
    this.route.navigate(["super-admin/company/add"])
  }
  editCompany(cid: any) {
    this.route.navigate(
      ['/super-admin/company/add'],
      { queryParams: { id: cid } }
    );
  }

}
