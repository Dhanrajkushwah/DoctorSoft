import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CompanyService } from '../../../services/company.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent {

  addInvoiceForm!: FormGroup;
  checkForm: boolean = false;
  allPatientData: any = [];
  allDoctorData: any = [];
  allClinicData: any = [];
  allServiceData: any = [];
  id: any;
  billById: any = [];
  selectservices: any = ['In Clinic Consultation',
    ' In Clinic Session',
    'Online Consultation',
    'Online Video Exercise Program',
    'Home Visit Services',
    'Online Yoga Class',
    'Online Diet Plan',
    'Online Counselling',
    'PACKAGES '
  ];
  patientId :any;
  doctorId:any;
  total:any
  constructor(
    private _router: Router,
    private _fb: FormBuilder,
    private companyService: CompanyService,
    private activatedRoute: ActivatedRoute

  ) {

  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params["id"]
    })
    this.doctorId = sessionStorage.getItem("admin_id");

    this.addInvoiceForm = this._fb.group({
      doctorName: ["", Validators.required],
      patientName: ["", Validators.required],
      invoiceDate: ["", Validators.required],
      patientId : [""],
      doctorId : [this.doctorId],
      totalAmountCalc: [""],
      billDetails: new FormArray([])
    })
    this.OnPageLoad();

  }
  OnPageLoad() {
    this.activatedRoute.params.subscribe((params: Params)=>{
      this.patientId = params["id"];
   
    })
    let doctorId = sessionStorage.getItem('admin_id');

    this.companyService.getPatientById(this.patientId).subscribe({
      next: (res) => {
        this.allPatientData = res;
        console.log(this.allPatientData, "*********")
      }
    })
    this.companyService.getdoctorById(doctorId).subscribe({
      next: (res) => {
        this.allDoctorData.push(res);
        console.log(this.allDoctorData)
      }
    })
 
    
  }

  get billDetails(): FormArray {
    return this.addInvoiceForm.get('billDetails') as FormArray;
  }
  addControl() {
    const newControl = this._fb.group({
      serviceName: ["", Validators.required],
      quantity: ["", Validators.required],
      price: ["", Validators.required],
      discount: [""],
      description: [""],
      amount: ["", Validators.required],

    
    })
    this.billDetails.push(newControl);

  }
  removeFormArrayBill(index: any) {
    console.log(index)
    this.billDetails.removeAt(index);
  }

  updateAmounts(): void {
    let totalAmount = 0; 
    this.billDetails.controls.forEach(item => {
      const quantity = item.get('quantity')?.value;
      const price = item.get('price')?.value;
      const discount = item.get('discount')?.value || 0;
      const calDiscount = discount / 100;
      const amount = quantity * price;
      const discAmount = amount - calDiscount * amount;
      item.get('amount')?.setValue(discAmount);
  
      totalAmount += discAmount; 
      item.get('totalAmountCalc')?.setValue(totalAmount);
    });
  this.total = totalAmount;
  console.log(this.total)
  
    console.log('Total Amount:', totalAmount);
  }
  saveInvoice() {
    console.log(this.addInvoiceForm.value);
    if (this.addInvoiceForm.invalid) {
      this.checkForm = true;
      return
    } else {
      console.log(this.addInvoiceForm.value);
      this.updateAmounts();
    this.addInvoiceForm.get('patientId')?.setValue(this.patientId)
    this.addInvoiceForm.get('totalAmountCalc')?.setValue(this.total)
      this.companyService.addinvoice(this.addInvoiceForm.value).subscribe({
        next: (res)=>{
          console.log('data addes', res)
           this._router.navigate(["super-admin/allpatient/"+ this.patientId])
        },
        error: (err)=>{console.log(err)}
        })
    }
  }

  closeInvoice() {
    this._router.navigate(["/super-admin/allpatient/"+ this.patientId])
  }
}
