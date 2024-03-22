import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, VERSION } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { dE } from '@fullcalendar/core/internal-common';
import { CompanyService } from 'src/app/component/super-admin/services/company.service';
import { routes } from 'src/app/core/core.index';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
  resetPasswordForm !:FormGroup ;
  selectedIncomedata: any;
  editData = false;
  data: any;
  _id :any;
  token:any;
  headers:any;
  constructor( private fb : FormBuilder,private _company : CompanyService,private router:Router,private activateRoute: ActivatedRoute,private http: HttpClient){
    this.activateRoute.queryParams.subscribe(parsam => {
      this.selectedIncomedata = JSON.parse(atob(parsam['data']));
      if (this.selectedIncomedata) {
        this.data = this.selectedIncomedata;
        console.log("Get by id data",this.data)
        this._id = this.data._id;
        this.editData = true;
      } else {
        this.editData = false;
      }
    });
  }
  passwordsMatching = false;
  isConfirmPasswordDirty = false;
  confirmPasswordClass = 'form-control';
  password = new FormControl(null, [
    (c: AbstractControl) => Validators.required(c),
    Validators.pattern(
      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/
    ),
  ]);
  confirmPassword = new FormControl(null, [
    (c: AbstractControl) => Validators.required(c),
    Validators.pattern(
      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/
    ),
  ]);
  ngOnInit(){

     this.token= sessionStorage.getItem('user-token')
     console.log("Token",this.token)
     this.headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
     console.log("header",this.headers)
  this.resetPasswordForm = this.fb.group(
    {
      password: this.password,
      confirmPassword: this.confirmPassword,
  
    },
    {
      validator: this.ConfirmedValidator('password', 'confirmPassword'),
    }
  );
  }


  onSubmit(): void {
    if (!this.resetPasswordForm?.valid) {
      return;
    }else {
      console.log(this.resetPasswordForm.value);
      let passValue={
        password:this.resetPasswordForm.value.confirmPassword,
        token: this.token
      }
      this._company.resetpass(this._id,passValue).subscribe({
        next : (res) =>{
          console.log(res)
          this.router.navigate(["admin/user"])
        },
        error : (err) =>{
          console.log(err)
        },
      })
    }
  }

  ConfirmedValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (
        matchingControl.errors &&
        !matchingControl.errors['confirmedValidator']
      ) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmedValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }
}