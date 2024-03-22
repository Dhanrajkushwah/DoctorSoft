import { Component, OnInit } from '@angular/core';
import { Data, Router } from '@angular/router';
import { routes } from 'src/app/core/core.index';
import { CouponsService } from '../../../services/coupons/coupons.service';
import { SweetalertService } from 'src/app/shared/sweetalert/sweetalert.service';
@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.scss']
})
export class CouponsComponent implements OnInit {
  coupondata: any = [];
  public routes = routes;
  constructor(
    private route: Router,
    private ser: CouponsService,
    private _sweetAlert: SweetalertService
  ) { }

  ngOnInit(): void {
    this.getcoupon();
  }

  addcoupon() {
    this.route.navigate(["super-admin/coupons/add"])
  }

  getcoupon() {
    this.ser.getCoupons().subscribe(res => {
      this.coupondata = res
    })
  }

  deleteCoupan(id: any) {
    console.log(id)
    this._sweetAlert.deleteBtn().then((val) => {
      if (val.isConfirmed) {
        this.ser.deleteCoupons(id).subscribe({
          next: (res) => {
            const index = this.coupondata.findIndex((coupondata: { _id: any; }) => coupondata._id === id);
            if (index !== -1) {
              this.coupondata.splice(index, 1);
            }
            console.log("data deleted");
          }
        })
      }
    })
  }
}
