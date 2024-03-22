import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CompanyService } from '../../../services/company.service';
@Component({
  selector: 'app-add-lab-package',
  templateUrl: './add-lab-package.component.html',
  styleUrls: ['./add-lab-package.component.scss']
})
export class AddLabPackageComponent {
  addPackage!: FormGroup;
  ck: boolean = false;
  labtestData: any = [];
  allCategory: any = [];
  allPackages:any = [];
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
      packageName: ['', Validators.required],
      packageTitle: ['', Validators.required],
      packageImage: ['', Validators.required],
      packageDescription: ['', Validators.required],
      packagePlan: ['', Validators.required],
      packagePrice: ['', Validators.required],
    })
      this.service.getlabtest().subscribe(res => {
        this.labtestData = res
      })
    this.getAllpackage();

  }
  getAllpackage() {
    this.service.gettestpackage().subscribe({
      next: (res) => {
        this.allPackages = res
      }
    })
  }
  
  addPackages() {
    if (this.addPackage.invalid) {
      this.ck = true;
      return
    }
    else {
      let formdata: FormData = new FormData()
      formdata.append('packageName', this.addPackage.value.packageName)
      formdata.append('packageTitle', this.addPackage.value.packageTitle)
      formdata.append('packageDescription', this.addPackage.value.packageDescription)
      formdata.append('packageImage', this.labimage)
      formdata.append('packagePlan', this.addPackage.value.packagePlan)
      formdata.append('packagePrice', this.addPackage.value.packagePrice)
      this.service.addlabtest(formdata).subscribe({
        next: (res) => {
          this.router.navigate(["super-admin/labpackage"])
        },
        error: (err) => { console.log(err) }
      })
    }
  }
  OnLabImage(event: any) {
    if (event.target.files.length > 0) {
      this.labimage = event.target.files[0];
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
 
  cancel() {
    this.router.navigate(["super-admin/package"])
  }

}
