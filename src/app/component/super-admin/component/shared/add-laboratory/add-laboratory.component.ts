import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyService } from '../../../services/company.service';
import { SweetalertService } from 'src/app/shared/sweetalert/sweetalert.service';
import { CustomPageService } from '../../../services/custom-page/custom-page.service';

@Component({
  selector: 'app-add-laboratory',
  templateUrl: './add-laboratory.component.html',
  styleUrls: ['./add-laboratory.component.scss']
})
export class AddLaboratoryComponent {
  verifyOTPform!: FormGroup;
  ck: boolean = false;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    public snackBar: CustomPageService,
    private service: CompanyService) {
  }

  ngOnInit(): void {
    this.verifyOTPform = this.fb.group({
      otp: ['', Validators.required],
    })
  }
  numberOnly(event: any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
  addOTP() {
    if (this.verifyOTPform.invalid) {
      this.ck = true;
      return
    }
    else {
      this.service.addOTPApp(this.verifyOTPform.value).subscribe({
        next: (res) => {
          if(res){
          this.snackBar.openSnackBar(res.message);
          this.router.navigate(["super-admin/laboratory"])
          }

        },
        error: (error) => { 
console.log(error);
this.snackBar.openSnackBar(error.error.error);
         }
      })
    }
}

 
}
