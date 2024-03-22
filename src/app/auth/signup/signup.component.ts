import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { routes } from 'src/app/core/helpers/routes';
import { WebstorgeService } from 'src/app/shared/webstorge.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  signinform !:FormGroup ;
  public routes = routes;
  show = false;
  public CustomControler: undefined;
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
  
  constructor(private fb : FormBuilder) {}
  ngOnInit(){
  this.signinform = this.fb.group(
    { 
      fullName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: this.password,
      confirmPassword: this.confirmPassword,
  
    },
    {
      validator: this.ConfirmedValidator('password', 'confirmPassword'),
    }
  );
  }
  get f() {
    return this.signinform.controls;
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

  onSubmit(): void {
    if (!this.signinform?.valid) {
      return;
    }else {
      console.log("Sign in Data",this.signinform.value)
      
    //   this._company.resetpass(this._id,passValue).subscribe({
    //     next : (res) =>{
    //       console.log(res)
    //       this.router.navigate(["admin/user"])
    //     },
    //     error : (err) =>{
    //       console.log(err)
    //     },
    //   })
    // }
  }
}
}
