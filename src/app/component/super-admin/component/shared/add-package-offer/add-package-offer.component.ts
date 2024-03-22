import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CompanyService } from '../../../services/company.service';

@Component({
  selector: 'app-add-package-offer',
  templateUrl: './add-package-offer.component.html',
  styleUrls: ['./add-package-offer.component.scss']
})
export class AddPackageOfferComponent implements OnInit {

  addPackage!: FormGroup;
  ck: boolean = false;
  labtestData: any = [];
  allCategory: any = [];
  allspeciality:any = [];
  doctorData: [] = [];

  labimage!:File;
  imagesBox = '../../../../../../assets/img/product/product1.jpg'
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private service: CompanyService) {

  }



  ngOnInit(): void {
    this.addPackage = this.fb.group({
      offerTitle: ['', Validators.required],
      offerName: ['', Validators.required],
      offertestPackage: ['', Validators.required],
      offerPrice: ['', Validators.required],
    })
      this.service.getlabtest().subscribe(res => {
        this.labtestData = res
      })
    this.GetAllSpeciality();

  }
  GetAllSpeciality() {
    this.service.gettestpackage().subscribe({
      next: (res) => {
        this.allspeciality = res
        console.log("Specility", this.allspeciality[0].testpackageName);
      }
    })
  }
   change(item: any) {
  }
  addPackages() {
    if (this.addPackage.invalid) {
      this.ck = true;
      return
  } 
  console.log(this.addPackage.value);
  this.service.addofferpackage(this.addPackage.value).subscribe({
    next: (res)=>{
      this.router.navigate(["super-admin/packageinclude"])
    },
    error: (err)=>{console.log(err)}
    })
  }
  
  cancel() {
  
    this.router.navigate(["super-admin/packageoffer"])
  }
  keyPressNumbers(event: any) {
    var charCode = (event.which) ? event.which : event.keyCode;
    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }

}
