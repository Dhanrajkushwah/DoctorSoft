import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CouponsService } from '../../../services/coupons/coupons.service';

@Component({
  selector: 'app-add-coupons',
  templateUrl: './add-coupons.component.html',
  styleUrls: ['./add-coupons.component.scss']
})
export class AddCouponsComponent {
  addcoupon!:FormGroup;
  ckcoupn: boolean = false;
  
  constructor(
    private fb:FormBuilder,
    private router:Router,
    private ser:CouponsService){}

  ngOnInit(): void {
    this.addcoupon = this.fb.group({
      name: ['',Validators.required],
      discount: ['',Validators.required],
      limit: ['',Validators.required],
    })
  }

  addcouponsss() {
    if (this.addcoupon.invalid) {
      this.ckcoupn = true;
      return
  } 

  console.log(this.addcoupon.value);
  this.ser.addCoupons(this.addcoupon.value).subscribe({
    next: (res)=>{
      this.router.navigate(["super-admin/coupons"])
    },
    error: (err)=>{console.log(err)}
    })
  }
  cancelCoupan(){
    // alert("hello9")
    this.router.navigate(["super-admin/coupons"])
  }
}
