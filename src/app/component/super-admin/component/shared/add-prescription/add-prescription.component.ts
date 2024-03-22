import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CompanyService } from '../../../services/company.service';

@Component({
  selector: 'app-add-prescription',
  templateUrl: './add-prescription.component.html',
  styleUrls: ['./add-prescription.component.scss']
})
export class AddPrescriptionComponent implements OnInit {

  addPrescription!: FormGroup;
  ck: boolean = false;
  departmentData: any = [];
  GetTherapygetById:any=[];
  patientData: any = [];
  department: any;
  inputValue: string = '';
  yesterday = new Date();
  id:any;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: CompanyService,
    private activateRoute: ActivatedRoute,
    ) {

      this.yesterday.setDate(this.yesterday.getDate() - 0);
     }

  ngOnInit(): void {
    this.addPrescription = this.fb.group({
      therapy: ['', Validators.required],
    })

    this.activateRoute.params.subscribe(
      (params : Params)=>{
        this.id =params["id"]
      }
    )
    this.service.GetTherapygetById(this.id).subscribe({
      next: (res)=>{
        console.log(res)
        this.GetTherapygetById = res;
        this.addPrescription.patchValue({therapy: this.GetTherapygetById[0].therapy})
      }
    })

    
    this.department = sessionStorage.getItem("admin-department")
    console.log(this.department);
  }

  handleChange() {
    console.log(this.inputValue);
    this.service.getAllPatientDetail(this.inputValue).subscribe(res => {
      this.patientData = res
     
    })
  }

  addPrescriptions() {
    if (this.addPrescription.invalid) {
      this.ck = true;
      return
    }
    else {
      this.service.addTherapy(this.addPrescription.value).subscribe({
        next: (res) => {
          this.router.navigate(["super-admin/prescription"])
        },
        error: (err) => { console.log(err) }
      })
    }

  }

  opensend() {
    this.router.navigate(["/super-admin/prescription/add"])
  }

  UpdatePrescriptions(){
    this.service.editTherapy(this.id, this.addPrescription.value).subscribe({
      next: (res)=>{
        console.log("updated", res);
        this.router.navigate(["/super-admin/prescription"])
      }
    })

  }

  cancelCoupan() {
    this.router.navigate(["super-admin/prescription"])
  }

  keyPressNumbers(event: any) {
    var charCode = (event.which) ? event.which : event.keyCode;
    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }
}





