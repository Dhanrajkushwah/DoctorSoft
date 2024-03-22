import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CompanyService } from '../../../services/company.service';

@Component({
  selector: 'app-addpatient-document',
  templateUrl: './addpatient-document.component.html',
  styleUrls: ['./addpatient-document.component.scss']
})
export class AddpatientDocumentComponent {
  addPrescription!: FormGroup;
  imgs: any = [];
  ck: boolean = false;
  patientData: any = [];
  id: any;
  patientId :any
  imagesBox = '../../../../../../assets/img/product/product1.jpg';
  loggedPatientData: any = [];
  loggedPatientId: any;
  doctorId: any;
  doctorName:any;
  constructor(
    private _router: Router,
    private fb: FormBuilder,
    private service: CompanyService,
    private route: ActivatedRoute
    ) {
      this.doctorId = sessionStorage.getItem('admin_id');
      this.doctorName = sessionStorage.getItem("admin_name");
    this.addPrescription = this.fb.group({
      patientName: ['', Validators.required],
      type: ['', Validators.required],
      document: ['', Validators.required],
      date: ['', Validators.required],
      patientId : [""],
      doctorId: [this.doctorId],
      doctorName: [this.doctorName]
    })

    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    });
  }
  ngOnInit(): void {
 

   this.route.params.subscribe((params: Params)=>{
  this.patientId = params["id"];
  console.log(this.patientId);
  if(this.patientId){
    this.service.getPatientById(this.patientId).subscribe({
      next: (res)=>{
        console.log(res,"logged patient data")
        this.loggedPatientData = res;


      }
    })
  }
  else{
 this.loggedPatientId = sessionStorage.getItem('client_id');
 console.log(this.loggedPatientId, "id");
 this.service.getPatientById(this.loggedPatientId).subscribe({
  next: (res)=>{
    console.log(res);
    this.loggedPatientData = res;
  }
 })
  }
 
   })
   if(this.patientId){
    this.service.getPatientDocumentsById(this.patientId).subscribe({
      next : (res)=>{
        console.log(res)
      },
      error : (err)=>{console.log("error", err)}
    })
   }

   this.getPatient();
  };
  getPatient() {
    this.service.getAllPatient().subscribe(res => {
      this.patientData = res;
      console.log(this.patientData)
    
    
    })

  }

  cancel() {
    this._router.navigate(["/super-admin/allpatient/"+this.patientId])
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
      if(this.patientId){this.addPrescription.get('patientId')?.setValue(this.patientId);}
      else if(this.loggedPatientId){this.addPrescription.get('patientId')?.setValue(this.loggedPatientId);}
      // this.addPrescription.get('doctorId')?.setValue(this.doctorId);
    
      let formdata: FormData = new FormData()
      formdata.append('patientName', this.addPrescription.value.patientName)
      formdata.append('type', this.addPrescription.value.type)
      formdata.append('document', this.imgs)
      formdata.append('date', this.addPrescription.value.date)
       formdata.append('patientId',  this.addPrescription.value.patientId )
       formdata.append('doctorId',  this.addPrescription.value.doctorId )
       formdata.append('doctorName',  this.addPrescription.value.doctorName )

      this.service.addPatientDocument(formdata).subscribe({
        next: (res) => {
         if(this.loggedPatientId){
          this._router.navigate(["/client/medicalrecord"])
         }
         else {
           this._router.navigate(["/super-admin/allpatient/"+this.patientId])
         }
    
        },
      })
    }
   
  }

}