import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from '../../../services/company.service';

@Component({
  selector: 'app-add-private-note',
  templateUrl: './add-private-note.component.html',
  styleUrls: ['./add-private-note.component.scss']
})
export class AddPrivateNoteComponent {
  
  addPrescription!: FormGroup;
  imgs: any = [];
  ck: boolean = false;
  patientData: any = [];
  patientdataById: any =[]
  id: any
  imagesBox = '../../../../../../assets/img/product/product1.jpg'
  patientfirst: any;
  doctorId:any;
  doctorName:any;
  constructor(private _router: Router, private fb: FormBuilder, private service: CompanyService,private route: ActivatedRoute,) {
   
    this.addPrescription = this.fb.group({
      patientName:['', Validators.required],
      note:  ['', Validators.required],
      date:  ['', Validators.required],
      patientId: [''],
      doctorId: [""],
      doctorName: [""]
    })

    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }
  ngOnInit(): void {
    // this.addQuantity();
    this.doctorId = sessionStorage.getItem('admin_id');
    this.doctorName = sessionStorage.getItem("admin_name")

    console.log(this.doctorId, "%%%%%%%%")
    console.log(this.id);
    this.service.getPatientById(this.id).subscribe({
      next: (res)=>{
        console.log(res);
        this.patientdataById =res;
      }
    })
    this.getPatient();
  };
  getPatient() {
    this.service.getAllPatient().subscribe(res => {
      this.patientData = res
      console.log("patientData", this.patientData);
    })

  }
  slectname(event:any){
  let key  = event.target.value;
 let [arr , id] = key.split(',');
 this.id = id;
 this.patientfirst = arr;
  }
  cancel() {
    this._router.navigate(["/super-admin/allpatient/"+this.id])
  }
  Onupload(event: any) {
    this.imgs=(event.target.files[0])
  }
  onSubmit() {
    this.addPrescription.get('patientName')?.setValue(this.patientfirst)
    this.addPrescription.get('patientId')?.setValue(this.id);
    this.addPrescription.get('doctorId')?.setValue(this.doctorId);
    this.addPrescription.get('doctorName')?.setValue(this.doctorName);

    if (this.addPrescription.invalid) {
      this.ck = true;
      return
    }
    else{
   
      console.log("patient node",this.addPrescription.value)
      this.service.addPatientNote(this.addPrescription.value).subscribe({
        next: (res) => {
    this._router.navigate(["/super-admin/allpatient/"+this.id])

        },
      })
    }
  
  }
}
