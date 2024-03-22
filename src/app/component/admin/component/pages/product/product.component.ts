import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/component/super-admin/services/company.service';
import { SweetalertService } from 'src/app/shared/sweetalert/sweetalert.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productData: any = []
  constructor(private route: Router,
    private service: CompanyService,
    private _sweetAlert: SweetalertService
  ) { }
  ngOnInit(): void {
  //  this.getProduct()
  }

  addProduct() {
    this.route.navigate(["admin/product/add"])
  }

  // getProduct() {
  //   this.service.getProduct().subscribe(res => {
  //     this.productData = res
  //     console.log(this.productData, "productData");
  //   })

  // }

  // editProduct(pid: any) {
  //   this.route.navigate(
  //     ['/admin/product/add'],
  //     { queryParams: { id: pid } }
  //   );
  // }
  // deleteProduct(id: any) {
  //   console.log(id);
  //   this._sweetAlert.deleteBtn().then((val) => {
  //     if (val.isConfirmed) {
  //       this.service.deleteProductById(id).subscribe({
  //         next: (res) => {
  //           const index = this.productData.findIndex((productData: { _id: any; }) => productData._id === id);
	// 			if (index !== -1) {
	// 			  this.productData.splice(index, 1);
	// 			}
  //           console.log(res);
       
  //         },
  //         error: (err) => {
  //           console.log(err)
  //         }
  //       })
  //     }
   // })
 // }
}