import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from '../../../services/company.service';

@Component({
  selector: 'app-add-medication',
  templateUrl: './add-medication.component.html',
  styleUrls: ['./add-medication.component.scss']
})
export class AddMedicationComponent {
  @Input() medicationPatientId: any
  addPrescription!: FormGroup;
  imgs: any = [];
  ck: boolean = false;
  patientData: any = [];
  medicineData: any = [];
  id: any
  imagesBox = '../../../../../../assets/img/product/product1.jpg'
  constructor(
    private _router: Router,
     private fb: FormBuilder, 
     private service: CompanyService ,
      private route: ActivatedRoute
      ) {
    this.addPrescription = this.fb.group({
      patientName: ['', Validators.required],
      medicineName: ['', Validators.required],
      dosage: ['', Validators.required],
      frequency: ['', Validators.required],
      timing: ['', Validators.required],
      patientId: [""]

    })

    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      console.log(this.id)
    });
  }
  ngOnInit(): void {
    this.getPatient();
    this.getMedicine();
  };
  getPatient() {
    this.service.getAllPatient().subscribe(res => {
      this.patientData = res
      console.log("patientData", this.patientData);
    })
  }
  getMedicine() {
    this.service.getDrugs().subscribe(res => {
      this.medicineData = res
      console.log("medicineData", this.medicineData);
    })
  }

  cancel() {
    this._router.navigate(["/super-admin/medication"])
  }
  Onupload(event: any) {
    this.imgs = (event.target.files[0])
  }
  onSubmit() {
    if (this.addPrescription.invalid) {
      this.ck = true;
      return
    }
    else {
      let formdata: FormData = new FormData()
      formdata.append('patientName', this.addPrescription.value.patientName)
      formdata.append('type', this.addPrescription.value.type)
      formdata.append('document', this.imgs)
      formdata.append('date', this.addPrescription.value.date)

      this.service.addPatientDocument(formdata).subscribe({
        next: (res) => {
          this._router.navigate(["/super-admin/medication"])

        },
      })
    }


  }

}
