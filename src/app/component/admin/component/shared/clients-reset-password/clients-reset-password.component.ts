import { Component,VERSION } from '@angular/core';
import { FormBuilder, FormGroup,Validators, AbstractControl, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/component/super-admin/services/client/client.service';

@Component({
  selector: 'app-clients-reset-password',
  templateUrl: './clients-reset-password.component.html',
  styleUrls: ['./clients-reset-password.component.scss']
})
export class ClientsResetPasswordComponent {
  resetPasswordForm !:FormGroup ;
  selectedIncomedata: any;
  editData = false;
  data: any;
  _id :any;
  token:any;
  constructor( 
    private fb : FormBuilder,
    private _clients : ClientService,
    private router:Router,
    private activateRoute: ActivatedRoute
    ){

    this.activateRoute.queryParams.subscribe((parsam: { [x: string]: string; }) => {
      this.selectedIncomedata = JSON.parse(atob(parsam['data']));
      if (this.selectedIncomedata) {
        this.data = this.selectedIncomedata;
        console.log("datahshddjsdjs",this.data)
        this._id = this.data._id;
        this.editData = true;
      } else {
        this.editData = false;
      }
    });
  }
  name = 'Angular ' + VERSION.major;
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
  this.resetPasswordForm = this.fb.group(
    {
      password: this.password,
      confirmPassword: this.confirmPassword,
    },
    {
      validator: this.ConfirmedValidator('password', 'confirmPassword'),
    }
  );
  const item = localStorage.getItem('key');
  console.log("token",item)
  }


  onSubmit(): void {

    if (!this.resetPasswordForm?.valid) {
      return;
    }else {
      console.log(this.resetPasswordForm.value);
      let passValue={
        password:this.resetPasswordForm.value.confirmPassword,
        token:this.token
      }
      this._clients.resetpass(this._id,passValue).subscribe({
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
