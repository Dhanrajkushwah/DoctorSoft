import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CompanyService } from '../../../services/company.service';

@Component({
  selector: 'app-staff-register',
  templateUrl: './staff-register.component.html',
  styleUrls: ['./staff-register.component.scss']
})
export class StaffRegisterComponent {
  addstaffform: FormGroup;
  ckDep: boolean = false;
  id: any;
  hospitalbyIdData: any = []
  departmentData: any = []
  url: any;
  imgs!: File;
  removeClass = true;
  imagesBox = '../../../../../../assets/img/product/product1.jpg'
  constructor(private fb: FormBuilder, private router: Router, private service: CompanyService, private route: ActivatedRoute) {
    this.addstaffform = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      department: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      experience: ['', Validators.required],
      dateofBirth: ['', Validators.required],
      gender: ['', Validators.required],
      image: ['', Validators.required],
      id: ['']
    })
  }

  closeStaff() {
    this.router.navigate(["/super-admin/staff"])
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    });
    if (this.id) {
      this.service.gethospitalById(this.id).subscribe(res => {
        this.hospitalbyIdData = res;
        console.log(this.hospitalbyIdData.name);
        this.addstaffform.controls['name'].setValue(this.hospitalbyIdData.name);
        this.addstaffform.controls['email'].setValue(this.hospitalbyIdData.email);
        this.addstaffform.controls['password'].setValue(this.hospitalbyIdData.password);
        this.addstaffform.controls['department'].setValue(this.hospitalbyIdData.department);
        this.addstaffform.controls['address'].setValue(this.hospitalbyIdData.address);
        this.addstaffform.controls['phone'].setValue(this.hospitalbyIdData.phone);
        this.addstaffform.controls['descrption'].setValue(this.hospitalbyIdData.descrption);
        this.addstaffform.controls['image'].setValue(this.hospitalbyIdData.image);
      
        this.addstaffform.controls['id'].setValue(this.hospitalbyIdData._id);
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
  updateStaff() {
    if (this.addstaffform.invalid) {
      this.ckDep = true;
      return
    } else {
      try {
        console.log("Hospital data", this.addstaffform.value);
        let formData = new FormData();
        formData.append('image', this.imgs)
        const arr = ['name', 'email', 'department', 'address', 'phone','dateofBirth','gender','experience']
        for (let key of arr) {
          formData.append(key, this.addstaffform.get(key)?.value)
        }
        this.service.edithospital(this.id,formData).subscribe((res: any) => {
          console.log(res)
          this.router.navigate(['/super-admin/staff'])
        },
        )
      } catch (err) {
      }
    }
  }
  addStaff() {
    if (this.addstaffform.invalid) {
      this.ckDep = true;
      return
    } else {
      try {
        console.log("Hospital data", this.addstaffform.value);
        let formData = new FormData();
        formData.append('image', this.imgs)
        const arr = ['name', 'email','password', 'department', 'address', 'phone','dateofBirth','gender','experience']


        for (let key of arr) {

          formData.append(key, this.addstaffform.get(key)?.value)
        }
        this.service.addStaff(formData).subscribe((res: any) => {
          console.log(res)
          this.router.navigate(['/super-admin/staff'])
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
