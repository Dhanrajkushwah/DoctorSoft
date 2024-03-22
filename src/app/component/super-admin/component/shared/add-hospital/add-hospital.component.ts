import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { CompanyService } from '../../../services/company.service';

@Component({
  selector: 'app-add-hospital',
  templateUrl: './add-hospital.component.html',
  styleUrls: ['./add-hospital.component.scss']
})
export class AddHospitalComponent {
  addhospitalform: FormGroup;
  ckDep: boolean = false;
  id: any;
  hospitalbyIdData: any = []
  url: any;
  imgs!: File;
  removeClass = true;
  imagesBox = '../../../../../../assets/img/product/product1.jpg'
  departmentData: any = [];
  constructor(private fb: FormBuilder, private router: Router, private service: CompanyService, private route: ActivatedRoute) {
    this.addhospitalform = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      department: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      descrption: ['', Validators.required],
      image: ['', Validators.required],
      id: ['']
    })
  }

  closehospital() {
    this.router.navigate(["/super-admin/hospital"])
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    });
    if (this.id) {
      this.service.gethospitalById(this.id).subscribe(res => {
        this.hospitalbyIdData = res;
        console.log(this.hospitalbyIdData.name);
        this.addhospitalform.controls['name'].setValue(this.hospitalbyIdData.name);
        this.addhospitalform.controls['email'].setValue(this.hospitalbyIdData.email);
        this.addhospitalform.controls['password'].setValue(this.hospitalbyIdData.password);
        this.addhospitalform.controls['department'].setValue(this.hospitalbyIdData.department);
        this.addhospitalform.controls['address'].setValue(this.hospitalbyIdData.address);
        this.addhospitalform.controls['phone'].setValue(this.hospitalbyIdData.phone);
        this.addhospitalform.controls['descrption'].setValue(this.hospitalbyIdData.descrption);
        this.addhospitalform.controls['image'].setValue(this.hospitalbyIdData.image);

        this.addhospitalform.controls['id'].setValue(this.hospitalbyIdData._id);
      })
    }
    this.getAllDepartment();
  }

  getAllDepartment() {
    this.service.getAllDepartment().subscribe(res => {
      this.departmentData = res
    })
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
      this.imgs = event.target.files[0];

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
  updateHospital() {
    if (this.addhospitalform.invalid) {
      this.ckDep = true;
      return
    } else {
      try {
        console.log("Hospital data", this.addhospitalform.value);
        let formData = new FormData();
        formData.append('image', this.imgs)
        const arr = ['name', 'email', 'department', 'address', 'phone', 'descrption']
        for (let key of arr) {
          formData.append(key, this.addhospitalform.get(key)?.value)
        }
        this.service.edithospital(this.id, formData).subscribe((res: any) => {
          console.log(res)
          this.router.navigate(['/super-admin/hospital'])
        },
        )
      } catch (err) {
      }
    }
  }
  addHospital() {
    if (this.addhospitalform.invalid) {
      this.ckDep = true;
      return
    } else {
      try {
        console.log("Hospital data", this.addhospitalform.value);
        let formData = new FormData();
        formData.append('image', this.imgs)
        const arr = ['name', 'email', 'password', 'department', 'address', 'phone', 'descrption']


        for (let key of arr) {

          formData.append(key, this.addhospitalform.get(key)?.value)
        }
        this.service.addhospital(formData).subscribe((res: any) => {
          console.log(res)
          this.router.navigate(['/super-admin/hospital'])
        },

        )
      } catch (err) {
      }
    }
  }

  removeBtn() {
    this.removeClass = !this.removeClass;
  }
}
