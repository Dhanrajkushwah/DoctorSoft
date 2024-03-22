import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyService } from '../../../services/company.service';

@Component({
  selector: 'app-add-lab-category',
  templateUrl: './add-lab-category.component.html',
  styleUrls: ['./add-lab-category.component.scss']
})
export class AddLabCategoryComponent {

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
      category: ['', Validators.required],
      categoryImage: ['', Validators.required],
    })
  }

  ngOnInit(): void {}
  openproduct() {
    this.router.navigate(["super-admin/doctor"])
  }
  Cancel(){
    this.router.navigate(["/super-admin/laboratory"])
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


  addDoctors() {
    console.log("After Doctor data", this.addDoctorform.value);
    if (this.addDoctorform.invalid) {
      this.ckDep = true;
      return
    } else {
      try {
        console.log("Doctor data", this.addDoctorform.value);
        const formData = new FormData();
        formData.append('categoryImage', this.imgs)
        const arr = [ 
          'category',
        ]
        for (const key of arr) {
          if (key === 'details') {
            formData.append(key, JSON.stringify(this.addDoctorform.get(key)?.value));
          } else {
            formData.append(key, this.addDoctorform.get(key)?.value);
          }
        }
        console.log("post api");
        this.servises.addlabtest(formData).subscribe((res: any) => {
          console.log(res)
          this.router.navigate(['super-admin/laboratory'])
        },
        )
      } catch (err) {
        console.log(err)
      }
    }
  }
}
