import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CompanyService } from '../../../services/company.service';


@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss']
})
export class AddPatientComponent implements OnInit {

  addPatient!: FormGroup;
  ck: boolean = false;
  departmentData: any = [];
  getPatientByIdData: any = [];
  id: any;
  doctor_id: any;
  allContry: any[] = [];
  allState: any[] = [];
  allCity: any[] = [];
  contryName: string = ''
  patientbyIdData: any = []
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private service: CompanyService) {
    this.doctor_id = sessionStorage.getItem("admin_id");

  }

  ngOnInit(): void {
    this.addPatient = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      phone: ['', Validators.required],
      ultemobile: [''],
      dateOfBirth: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required],
      bloodgroup: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      address: ['', Validators.required],
      role: ['patient'],
      doctorId: [this.doctor_id]
    })


    this.service.getall_country().subscribe({
      next: (res) => {
        this.allContry = res
        console.log(this.allContry);
      },
      error: (err) => {
      },
    })
    this.route.params.subscribe((params: Params) => { this.id = params["id"] }); console.log(this.id);
    this.service.getpatientById(this.id).subscribe(
      {
        next: (res) => {
          this.getPatientByIdData = res;
          console.log(this.getPatientByIdData)
          this.addPatient.patchValue({ firstname: this.getPatientByIdData[0].firstname })
          this.addPatient.patchValue({ age: this.getPatientByIdData[0].age })
          this.addPatient.patchValue({ phone: this.getPatientByIdData[0].phone })
          this.addPatient.patchValue({ ultemobile: this.getPatientByIdData[0].ultemobile })
          this.addPatient.patchValue({ dateOfBirth: this.getPatientByIdData[0].dateOfBirth })
          this.addPatient.patchValue({ lastname: this.getPatientByIdData[0].lastname })
          this.addPatient.patchValue({ gender: this.getPatientByIdData[0].gender })
          this.addPatient.patchValue({ bloodgroup: this.getPatientByIdData[0].bloodgroup })
          this.addPatient.patchValue({ email: this.getPatientByIdData[0].email })
          this.addPatient.patchValue({ country: this.getPatientByIdData[0].country })
          this.addPatient.patchValue({ state: this.getPatientByIdData[0].state })
          this.addPatient.patchValue({ city: this.getPatientByIdData[0].city })
          this.addPatient.patchValue({ address: this.getPatientByIdData[0].address })
        }
      })
  }


  setContry_by_state(event: any) {
    this.contryName = event.target.value
    this.service.getall_states(this.contryName).subscribe({
      next: (res) => {
        this.allState = res;
      },
      error: (err) => {
      },
    })
  }

  getall_city(event: any) {
    let val = event.target.value
    this.service.getall_city(this.contryName, val).subscribe({
      next: (res) => {
        this.allCity = res
      },
      error: (err) => {
      },
    })
  }


  addPatients() {
    if (this.addPatient.invalid) {
      this.ck = true;
      return
    }
    else {
      console.log("Pataient data", this.addPatient.value)
      this.service.addPatient(this.addPatient.value).subscribe({
        next: (res) => {
          console.log("P Data", res)
          this.router.navigate(["super-admin/patient"])
        },
        error: (err) => { console.log(err) }
      })
    }
  }

  updatePatient() {
    if (this.addPatient.invalid) {
      this.ck = true;
      return
    } else {
      try {
        this.service.updatepatient(this.id, this.addPatient.value).subscribe((res: any) => {
          console.log(res)
          this.router.navigate(['/super-admin/patient'])
        },
        )
      } catch (err) {
      }
    }
  }
  cancelCoupan() {
    // alert("hello9")
    this.router.navigate(["super-admin/patient"])
  }
  keyPressNumbers(event: any) {
    var charCode = (event.which) ? event.which : event.keyCode;
    // Only Numbers 0-9
    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }


}

