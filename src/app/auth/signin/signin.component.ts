import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { routes } from 'src/app/core/helpers/routes';
import { ServiceService } from '../authservice/service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomPageService } from 'src/app/component/super-admin/services/custom-page/custom-page.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent {
  public routes = routes;
  password = false;
  show = false;
  form = new FormGroup({
    phone: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  get f() {
    return this.form.controls;
  }

  constructor(private route: Router, private authservice: ServiceService,public snackBar: CustomPageService) { }

  submit() {
    if (this.form.invalid) {
      return
    } 
    else {
      this.authservice.login(this.form.value).subscribe({
        next: (res: any) => {
         if (res.role === 'hospital') {
            this.snackBar.openSnackBar(`Welcome To Super Admin`);
            sessionStorage.setItem("superadmin-token", res.token)
            sessionStorage.setItem("superadmin-department", res.department)
            sessionStorage.setItem('superadmin_id', res._id);
            this.route.navigateByUrl("/super-admin/dashboard", {replaceUrl: true})
          } else if (res.role === 'doctor') {
            this.snackBar.openSnackBar(`Welcome To ${res.firstName +''+ res.lastName}`);
            sessionStorage.setItem("admin-token", res.token)
            sessionStorage.setItem("admin-department", res.department)
            sessionStorage.setItem('admin_id', res._id);
            sessionStorage.setItem('admin_name', res.firstName +' '+res.middleName+" "+ res.lastName);
            this.route.navigateByUrl("/admin/dashboard", {replaceUrl: true})
          } else if (res.role === 'patient') {
            this.snackBar.openSnackBar(`Welcome To ${res.firstname +''+ res.lastname}`);
            sessionStorage.setItem("client-token", res.token)
            sessionStorage.setItem("client-department", res.department)
            sessionStorage.setItem('client_id', res._id);
            this.route.navigateByUrl("/client/dashboard", {replaceUrl: true})
          } else if (res.role === 'staff') {
            sessionStorage.setItem("user-token", res.token)
            sessionStorage.setItem("user-department", res.department)
            sessionStorage.setItem('user_id', res._id);
            this.route.navigateByUrl("/user/dashboard", {replaceUrl: true})
          } else if(res.message) {
            this.snackBar.openSnackBar(`{res.message}`);
          }
        },
        error: (err) => {
          console.log(err.message)
        },
      }
      )
    }
  }
  onClick() {
    this.password = !this.password
    this.show = !this.show
  }

  onChanges(data: string) {
    if (data === 'Super-Admin') {
      this.form.controls['phone'].setValue('+918516016385');
      this.form.controls['password'].setValue('4oyDNjxvXt');
    } else if (data === 'Doctor-Admin') {
      this.form.controls['phone'].setValue('+916268204871');
      this.form.controls['password'].setValue('y9zQNLZ5am');
    } else if (data === 'Patient-Admin') {
    this.form.controls['phone'].setValue('+919644605330');
    this.form.controls['password'].setValue('waBZhIAs3w');

    } 

  }
}