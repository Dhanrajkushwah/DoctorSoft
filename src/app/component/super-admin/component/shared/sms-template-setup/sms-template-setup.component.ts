import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyService } from '../../../services/company.service';

@Component({
  selector: 'app-sms-template-setup',
  templateUrl: './sms-template-setup.component.html',
  styleUrls: ['./sms-template-setup.component.scss']
})
export class SmsTemplateSetupComponent {

  addPrescription!: FormGroup;
  constructor(private _router: Router, private fb: FormBuilder,private service:CompanyService) {
    this.addPrescription = this.fb.group({
      medicineName: this.fb.array([]),

    })
  }
  medicineName(): FormArray {
    return this.addPrescription.get("medicineName") as FormArray
  }

  newQuantity(): FormGroup {
    return this.fb.group({
      medicine: '',
      frequency: '',
      duration: '',
      instruction:''

    })
  }

  addQuantity() {
    this.medicineName().push(this.newQuantity());
  }

  removeQuantity(i: number) {
    this.medicineName().removeAt(i);
  }
  cancel() {
    this._router.navigate(["super-admin/druglist"])
  }
  onSubmit() {
    console.log(this.addPrescription.value);
    this.service.addDrug(this.addPrescription.value).subscribe({
      next: (res) => {
        this._router.navigate(["super-admin/druglist"])
      },
    })
  }
}
