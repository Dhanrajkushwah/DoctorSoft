import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-send-custom-email',
  templateUrl: './add-send-custom-email.component.html',
  styleUrls: ['./add-send-custom-email.component.scss']
})
export class AddSendCustomEmailComponent {
  addsendemail!:FormGroup;
  ckDep: boolean = false;
  removeClass = true;

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ){
    this.addsendemail = this.fb.group({
      reciveremail : ['', Validators.required],
      subject : ['', Validators.required],
      emailtemplate : ['', Validators.required],
    })
  }
  
  addsend() {
    if (this.addsendemail.invalid) {
      this.ckDep = true;
      return
    }
}

  opensend() {
    this.router.navigate(["/super-admin/sendcustomemail"])
  }

  removeBtn() {
    this.removeClass = !this.removeClass;
  }

}
