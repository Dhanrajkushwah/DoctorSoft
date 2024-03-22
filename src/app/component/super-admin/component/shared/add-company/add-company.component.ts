import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { routes } from 'src/app/core/helpers/routes';
import { CompanyService } from '../../../services/company.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.scss']
})
export class AddCompanyComponent implements OnInit {
  public routes = routes;
  addUserForm !: FormGroup;
  ckForm = false;
  removeClass = true;
  imgs!: File;
  imagesBox = '../../../../../../assets/img/product/product1.jpg'
  cid: any;
  companybyIdData: any
  constructor(
    private _fb: FormBuilder,
    private _company: CompanyService,
    private _routes: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.addUserForm = this._fb.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
      image: ['', Validators.required],
      id: ['']
    });
    this.route.queryParams.subscribe(params => {
      this.cid = params['id'];
    });
    // if (this.cid) {
    //   this._company.getCompanyById(this.cid).subscribe(res => {
    //     this.companybyIdData = res;
    //     console.log(this.companybyIdData.name);
    //     this.addUserForm.controls['name'].setValue(this.companybyIdData.name);
    //     this.addUserForm.controls['email'].setValue(this.companybyIdData.email);
    //     this.addUserForm.controls['password'].setValue(this.companybyIdData.password);
    //     this.addUserForm.controls['image'].setValue(this.companybyIdData.image);
    //     this.addUserForm.controls['id'].setValue(this.companybyIdData._id);
    //   })
    // }

  }

  Onupload(event: any) {
    if (event.target.files.length > 0) {
      this.imgs = event.target.files[0];
      console.log(this.imgs)
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

  updateCompanys() {
    if (this.addUserForm.invalid) {
      this.ckForm = true;
      return
    } else {
      try {
        let Formdata: FormData = new FormData();
        Formdata.append("name", this.addUserForm.value.name)
        Formdata.append("email", this.addUserForm.value.email);
        Formdata.append("password", this.addUserForm.value.password);
        Formdata.append("image", this.imgs);
        this._company.updateCompany(this.cid, Formdata).subscribe((res: any) => {
          console.log(res)
          this._routes.navigate(['super-admin/company'])
        },

        )
      } catch (err) {
      }
    }
  }

  onSubmit() {
    if (this.addUserForm.invalid) {
      this.ckForm = true;
      return
    } else {
      try {
        // eslint-disable-next-line prefer-const
        let formData = new FormData();
        formData.append('image', this.imgs)
        const arr = ['name', 'email', 'password']
        // eslint-disable-next-line prefer-const
        for (let key of arr) {

          formData.append(key, this.addUserForm.get(key)?.value)
        }


        this._company.addCompany(formData).subscribe({
          next: (res) => {
            if (res) {
              this._routes.navigate(['/super-admin/company'])
            }
          },
          error: (err) => {
            console.log(err)
          },
        })

      } catch (e) {
        console.log(e)
      }
    }



  }


  removeBtn() {
    this.removeClass = !this.removeClass;
  }

}
