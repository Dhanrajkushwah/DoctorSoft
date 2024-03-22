import { NgSignaturePadOptions, SignaturePadComponent } from '@almothafar/angular-signature-pad';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CompanyService } from '../../../services/company.service';
import { DoctorApiService } from '../../../services/doctor-api.service';


@Component({
  selector: 'app-add-doctor-update',
  templateUrl: './add-doctor-update.component.html',
  styleUrls: ['./add-doctor-update.component.scss']
})


export class AddDoctorUpdateComponent implements OnInit {
  addDoctorform!: FormGroup;
  isDisabled: boolean = true;
  ckDep: boolean = false;
  liveDate = new Date();
  PurchasLeagers: any;
  panelOpenState = false;
  url: any;
  imgs!: File;
  qimgs! :File;
  resgisimgs! :File;
  proimgs!:File
  clinicimgs! :File;
  dddsignature!: File
  signature!: File
  eagreementtttt!:File;

  PurchaseNote: string = '';
  Vendoe_Name: any = '';
  imagesBox = '../../../../../../assets/img/product/product1.jpg'
  productnams: any[] = [];
  productPrice: any[] = [];
  productQut: any[] = [];
  productDiscount: any[] = [];
  productTax: any[] = [];
  productAmount: any[] = [];
  allCategoryName: any = [];
  allspeciality: [] = [];
  allContry: any[] = [];
  allState: any[] = [];
  allCity: any[] = [];
  dis:any[]=[];
  contryName:string = ''
  Ser:string=''
  spesci: string = ''
  inputList: string = '';
  doctorList: any = [];
  doctoename: any = [];
  doctorname: any = [];
  specializationData: any = [];
  allsubspeciality: any = [];
  specility: any;
  allservice: any = []
  Service: any = []
  Serviceper:any=[]
  item: any;
  doctorData: [] = [];
  num:[] = [];
  select: any;
  price: any;
  Totalamountsss :any;
  discount: any;
  totalprice: any;
  formData: FormData = new FormData();
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private services: CompanyService,
    private service: DoctorApiService,
  ) {
    this.addDoctorform = this.fb.group({
      registered: ['', Validators.required],
      title: ['', Validators.required],
      firstName: ['', Validators.required],
      middleName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      expreience: ['', Validators.required],
      year: ['', Validators.required],
      mobileno: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      website: ['', Validators.required],
      bloodGroup: ['', Validators.required],
      state: ['', Validators.required],
      district: ['', Validators.required],
      city: ['', Validators.required],
      tehsil: ['', Validators.required],
      village: ['', Validators.required],
      houseNumber: ['', Validators.required],
      clinicName: ['', Validators.required],
      clinicAddress: ['', Validators.required],
      clinicMobileno: ['', Validators.required],
      clinicPhoneno: ['', Validators.required],
      clinicEmail: ['', Validators.required],
      clinicWebsite: ['', Validators.required],
      mapDirection: ['', Validators.required],
      dsignature: ['data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAABkCAYAAAA8AQ3AAAAAAXNSR0IArs4c6QAAFNtJREFUeF7tnQW0FUUcxge7W7FR7AZsUbBbBOzu7i6OhX3sAru7W+xWTETFQkUQFbG78fzmsJ59e/feu3vv7rs7O9//nHd4wN3dmW/2fvPv6TB8+PBxRiIEhIAQcACBDiIsB1ZJQxQCQsAiIMLSiyAEhIAzCIiwnFkqDVQICAERlt4BISAEnEFAhOXMUmmgQkAIiLD0DggBIeAMAiIsZ5ZKAxUCQkCEpXdACAgBZxAQYTmzVBqoEBACIiy9A0JACDiDgAjLmaXSQIWAEBBh6R0QAkLAGQREWM4slQYqBISACEvvgBAQAs4gIMJyZqmKPdBx48aZwYMHmyeffNJ8/fXX5scffzS///67+euvv8w666xjtt12WzPxxBMXexIaXeEREGEVfonyGeCbb75pBg4caH766Scz6aSTmsknn9xMOOGEllSmmGIK+8Pv/PD//B//BjFNN9105s8//zSffPKJeeedd8zzzz9v/v7778QDXXnlle3nV111VTP77LObMWPGmKmnntp06tTJdOvWzT5LIgTiEBBhOfxe/PHHH+all14yI0aMMBNNNJEZO3as+e233yyJTDDBBJaEHn/8cadmCHHtsccepnfv3mbWWWd1auwabP4IiLDyxzjxEzCl7r33Xqu9PP3001YL+ffff82nn35q/+TfMbN8EAi3b9…'],
      signature:[''],
      areaWhereServe: ['', Validators.required],
      clinicInteriorExteriorPic: ['', Validators.required],
      qualficationPicture: ['', Validators.required],
      registrationCertificate: ['', Validators.required],
      profilePicture: ['', Validators.required],
      clinicLatterheadPicture: ['', Validators.required],
      speciality: ['', Validators.required],
      qualification: ['', Validators.required],
      specialization: ['', Validators.required],
      subSpecialization: ['', Validators.required],
      services: ['', Validators.required],
      accountNumber: ['', Validators.required],
      ifdcNumber: ['', Validators.required],
      accountHolderName: ['', Validators.required],
      bankName: ['', Validators.required],
      bankAddress: ['', Validators.required],
      eAggrement: ['', Validators.required],
      country: ['', Validators.required],
      gender:['', Validators.required],
      drStatus :['false'],
      terms: ['', Validators.requiredTrue],
      details: new FormArray([]),
    })
  }
  ngOnInit(): void {
    this.GetAllSpeciality();
    this.GetAllsubSpeciality();
    this.GetAllservice();
   this.getser();
  //  this.getallservicesper();

    this.services.getall_country().subscribe({
      next:(res) =>{
        this.allContry =res
        console.log(this.allContry);
      },
      error:(err) =>{
        console.log(err)
      },
    })
  }

setContry_by_state(event:any){
  this.contryName = event.target.value
  this.services.getall_states(this.contryName).subscribe({
    next : (res) =>{
      this.allState = res;
    },
    error : (err) =>{
      console.log(err)
    },
  })
}

getall_city(event:any){
  let val = event.target.value
  this.services.getall_city(this.contryName, val).subscribe({
    next:(res)=>{
      this.allCity=res
    },
    error:(err) =>{
      console.log(err)
    },
  })
}

  get details(): FormArray {
    return this.addDoctorform.get('details') as FormArray
  }

  addProductControl() {
    const productForm = this.fb.group({
      services: ["", Validators.required],
      clinicPrice: ["", Validators.required],
      Discount: ["", Validators.required],
      Amount: ["", Validators.required],
    })

    this.details.push(productForm)
  }
  removeFormArrayBill(index: any) {
    console.log(index)
    this.details.removeAt(index);
  }

  numberOnly(event: any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  Onupload(event: any) {
    if (event.target.files.length > 0) {
      this.imgs = event.target.files[0];
    }
    if (event.target.files && event.target.files[0]) {
      const filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        const reader = new FileReader();
        reader.onload = (event: any) => {
          this.imagesBox = event.target.result;
        }
        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }
  Onuploadquali(event: any) {
    if (event.target.files.length > 0) {
      this.qimgs = event.target.files[0];
    }
    if (event.target.files && event.target.files[0]) {
      const filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        const reader = new FileReader();
        reader.onload = (event: any) => {
          this.imagesBox = event.target.result;
        }
        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }

  Onuploadregis(event: any) {
    if (event.target.files.length > 0) {
      this.resgisimgs = event.target.files[0];
    }
    if (event.target.files && event.target.files[0]) {
      const filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        const reader = new FileReader();
        reader.onload = (event: any) => {
          this.imagesBox = event.target.result;
        }
        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }
  Onuploadpro(event: any) {
    if (event.target.files.length > 0) {
      this.proimgs = event.target.files[0];
    }
    if (event.target.files && event.target.files[0]) {
      const filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        const reader = new FileReader();
        reader.onload = (event: any) => {
          this.imagesBox = event.target.result;
        }
        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }
  Onuploadclinic(event: any) {
    if (event.target.files.length > 0) {
      this.clinicimgs = event.target.files[0];
    }
    if (event.target.files && event.target.files[0]) {
      const filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        const reader = new FileReader();
        reader.onload = (event: any) => {
          this.imagesBox = event.target.result;
        }
        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }
  Onuploadsign(event: any) {
    if (event.target.files.length > 0) {
      this.dddsignature = event.target.files[0];
    }
    if (event.target.files && event.target.files[0]) {
      const filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        const reader = new FileReader();
        reader.onload = (event: any) => {
          this.imagesBox = event.target.result;
        }
        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }

  OnuploadSign(event: any) {
    if (event.target.files.length > 0) {
      this.signature = event.target.files[0];
    }
    if (event.target.files && event.target.files[0]) {
      const filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        const reader = new FileReader();
        reader.onload = (event: any) => {
          this.imagesBox = event.target.result;
        }
        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }

  OnuploadeAggrement(event: any) {
    if (event.target.files.length > 0) {
      this.eagreementtttt = event.target.files[0];
    }
    if (event.target.files && event.target.files[0]) {
      const filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        const reader = new FileReader();
        reader.onload = (event: any) => {
          this.imagesBox = event.target.result;
        }
        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }

  addDoctor() {

    console.log("After Doctor data", this.addDoctorform.value);
    if (this.addDoctorform.invalid) {
      this.ckDep = true;
      return
    } else {
      try {
        console.log("Doctor data", this.addDoctorform.value);
        const formData = new FormData();
        formData.append('clinicInteriorExteriorPic', this.imgs)
        formData.append('qualficationPicture', this.qimgs)
        formData.append('registrationCertificate', this.resgisimgs)
        formData.append('profilePicture', this.proimgs)
        formData.append('clinicLatterheadPicture', this.clinicimgs)
        formData.append('signature', this.signature)
        formData.append('dsignature', this.dddsignature)
        formData.append('eAggrement', this.eagreementtttt)
        const arr = [
          'registered',
          'title',
          'firstName',
          'middleName',
          'lastName',
          'dateOfBirth',
          'expreience',
          'year',
          'mobileno',
          'email',
          'gender',
          'password',
          'website',
          'drStatus',
          'bloodGroup',
          'state',
          'district',
          'city',
          'country',
          'tehsil',
          'village',
          'houseNumber',
          'clinicName',
          'clinicAddress',
          'clinicMobileno',
          'clinicPhoneno',
          'clinicEmail',
          'clinicWebsite',
          'mapDirection',
          'areaWhereServe',
          'speciality',
          'qualification',
          'specialization',
          'subSpecialization',
          'services',
          'accountNumber',
          'ifdcNumber',
          'accountHolderName',
          'bankName',
          'bankAddress',
          'terms',
          'details'
        ]

        for (const key of arr) {

          if (key === 'details') {
            formData.append(key, JSON.stringify(this.addDoctorform.get(key)?.value));
          } else {

            formData.append(key, this.addDoctorform.get(key)?.value);
          }
        }
        console.log("post api");
        this.service.adddoctorssss(formData).subscribe((res: any) => {
          console.log(res)
          this.router.navigate(['super-admin/doctor'])
        },
        )
      } catch (err) {
        console.log(err)
      }
    }
  }

  GetAllSpeciality() {
    this.services.getSpecility().subscribe({
      next: (res) => {
        this.allspeciality = res
        console.log("Specility", this.allspeciality);
      }
    })
  }
  async change(item: any) {
    this.services.getQualification(item.value).subscribe((result) => {
      this.doctorData = result
      console.log("Category Data", this.doctorData)

    })
    this.services.getspecialization(item.value).subscribe(res => {
      this.specializationData = res
      console.log("Category specializationData", this.specializationData)
    })
  }
  GetAllsubSpeciality() {
    this.services.getsubspecialization().subscribe({
      next: (res) => {
        this.allsubspeciality = res
        console.log("Sub Specility", this.allsubspeciality);
      }
    })
  }
  GetAllservice() {
    this.services.getservice().subscribe({
      next: (res) => {
        this.allservice = res
        console.log("Sub Services", this.allservice);
      }
    })
  }

  getser(){
    this.services.getallservices().subscribe({
      next: (res) => {
        this.Service = res
        console.log("Sub Services", this.allservice);
      }
    })
  }


  setContry_by_statesss(event: any,ind :number) {
    
    this.Ser = event.target.value
    this.services.getallservicespercentageee(this.Ser).subscribe({
      next: (res) => {
        this.dis.push(res)
        this.dis.splice(ind , 1 ,res)
        this.details.controls.forEach((item:any,index : number) =>
        
        {

          item.get('Discount').setValue(this.dis[index])
        })


      }
    })
    this.onChangeEvent(this.price ,ind)
  }


  openproduct() {
    this.router.navigate(["super-admin/doctor"])
  }
  Cancel(){
    this.router.navigate(["/super-admin/doctor"])
  }
  URL: any;
  href: any
  @ViewChild('signature')
  public signaturePad!: SignaturePadComponent;
  public signaturePadOptions: NgSignaturePadOptions = { // passed through to szimek/signature_pad constructor
    minWidth: 1,
    canvasWidth: 300,
    canvasHeight: 100,
    backgroundColor: "#DCDCDC"
  };
  ngAfterViewInit() {
    this.signaturePad.set('minWidth', 5);
    this.signaturePad.clear();
  }
  drawComplete(event: MouseEvent | Touch) {
    console.log(event)
    this.URL = this.signaturePad.toDataURL();
    this.addDoctorform.patchValue({ dsignature: this.URL})

  }
  drawStart(event: MouseEvent | Touch) {
    console.log('Start drawing', event);
  }

  onChangeEvent(event: any,ind :number) {
    console.log(event.target.value);
    if(event.target){
      this.price = event.target.value;
      
    }else{
      this.price = event;
    }
 
    const discount = this.dis[ind]
    
    const amount = this.price * (discount / 100);
    // console.log("amount", amount)
    // this.details.controls.forEach((element: any) => {
    //   console.log(element.controls.Discount)
    //   element.controls.Discount.setValue(amount);
    // });

    this.details.controls.forEach((element: any ,index:number) => {
   if (ind === index) {
    element.controls.Amount.setValue((this.price -amount) );
   }
     
    });
    //console.log("last amount", Totalamountsss)
  }


}

