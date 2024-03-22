import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyService } from '../../../services/company.service';

@Component({
  selector: 'app-add-package-include',
  templateUrl: './add-package-include.component.html',
  styleUrls: ['./add-package-include.component.scss']
})
export class AddPackageIncludeComponent {

  addDoctorform!:FormGroup;
  ckDep: boolean = false;
  imgs!: File;
  imagesBox = '../../../../../../assets/img/product/product1.jpg'

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private servises:CompanyService
  ){
    this.addDoctorform = this.fb.group({
         testpackageName: ['', Validators.required],
         testpackageDescription: ['', Validators.required],
    })
  }

  ngOnInit(): void {}
  // openproduct() {
  //   this.router.navigate(["super-admin/doctor"])
  // }
  Cancel(){
    this.router.navigate(["/super-admin/packageinclude"])
  }


  addDoctors() {
    if (this.addDoctorform.invalid) {
      this.ckDep = true;
      return
  } 
  console.log(this.addDoctorform.value);
  this.servises.addtestpackage(this.addDoctorform.value).subscribe({
    next: (res)=>{
      this.router.navigate(["super-admin/packageinclude"])
    },
    error: (err)=>{console.log(err)}
    })
  }
  
}
