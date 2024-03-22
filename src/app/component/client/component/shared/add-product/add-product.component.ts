import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CompanyService } from 'src/app/component/super-admin/services/company.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  addProduct: FormGroup;
  ckDep: boolean = false;
  pid: any;
  ProductbyIdData: any = []
  url: any;
  images!: File
  removeClass = true;
  imagesBox = '../../../../../../assets/img/product/product1.jpg'
  constructor(private fb: FormBuilder, private router: Router, private service: CompanyService, private route: ActivatedRoute) {
    this.addProduct = this.fb.group({
      productName: ['', Validators.required],
      price: ['', Validators.required],
      type: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required],
      id: ['']
    })
  }

  openproduct() {
    this.router.navigate(["/admin/product"])
  }

  ngOnInit(): void {
    // this.route.queryParams.subscribe(params => {
    //   this.pid = params['id'];
    // });
    // if (this.pid) {
    //   this.service.getProductById(this.pid).subscribe(res => {
    //     this.ProductbyIdData = res;
    //     this.addProduct.patchValue({ description:this.ProductbyIdData[0].description })
    //     this.imagesBox = this.ProductbyIdData[0].image
    //     this.addProduct.patchValue({ productName: this.ProductbyIdData[0].productName })
    //     this.addProduct.patchValue({ price: this.ProductbyIdData[0].price })
    //     this.addProduct.patchValue({ type: this.ProductbyIdData[0].type })
    //     this.addProduct.patchValue({ image: this.ProductbyIdData[0].image })
    //     this.addProduct.patchValue({ id: this.ProductbyIdData[0]._id })
    //   })
    // }

  }

  numberOnly(event: any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
  Onupload(event: any) {

    if (event.target.files.length > 0) {
      this.images = event.target.files[0];

    }
    if (event.target.files && event.target.files[0]) {
      const filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {

        const reader = new FileReader();
        reader.onload = (event: any) => {
          this.imagesBox = event.target.result;

        }

        reader.readAsDataURL(event.target.files[i]);
      }
    }

  }
  // updateProducts() {
  //   if (this.addProduct.invalid) {
  //     this.ckDep = true;
  //     return
  //   } else {
  //     try {
  //       let Formdata: FormData = new FormData();
  //       Formdata.append("productName", this.addProduct.value.productName)
  //       Formdata.append("price", this.addProduct.value.price);
  //       Formdata.append("type", this.addProduct.value.type);
  //       Formdata.append("description", this.addProduct.value.description);
  //       Formdata.append("image", this.images);
  //       this.service.updateProduct(this.pid, Formdata).subscribe((res: any) => {
  //         console.log(res)
  //         this.router.navigate(['admin/product'])
  //       },

  //       )
  //     } catch (err) {
  //     }
  //   }
  // }
  // addProducts() {
  //   if (this.addProduct.invalid) {
  //     this.ckDep = true;
  //     return
  //   } else {
  //     try {
  //       let Formdata: FormData = new FormData();
  //       Formdata.append("productName", this.addProduct.value.productName)
  //       Formdata.append("price", this.addProduct.value.price);
  //       Formdata.append("type", this.addProduct.value.type);
  //       Formdata.append("description", this.addProduct.value.description);
  //       Formdata.append("image", this.images);
  //       this.addProduct.removeControl('id');
  //       this.service.addProduct(Formdata).subscribe((res: any) => {
  //         console.log(res)
  //         this.router.navigate(['admin/product'])
  //       },

  //       )
  //     } catch (err) {
  //     }
  //   }
  // }

  removeBtn() {
    this.removeClass = !this.removeClass;
  }
}
