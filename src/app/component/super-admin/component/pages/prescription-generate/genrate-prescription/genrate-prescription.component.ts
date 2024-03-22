import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { FormBuilder, Validators } from '@angular/forms';
import { CompanyService } from 'src/app/component/super-admin/services/company.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MedicationComponent } from '../../medication/medication.component';

@Component({
  selector: 'app-genrate-prescription',
  templateUrl: './genrate-prescription.component.html',
  styleUrls: ['./genrate-prescription.component.scss']
})
export class GenratePrescriptionComponent implements OnInit {

  addConsultationForm!: FormGroup;
  attachmentFile!: File;
  addOnBlur = true;
  allExam: string[] = [];
  checkForm: Boolean = false;
  pastVisitData : any = [];
  medicationData: any = [];

  @ViewChild('complaintInput') complaintInput!: ElementRef<HTMLInputElement>;
  @ViewChild('diagnosisInput') diagnosisInput!: ElementRef<HTMLInputElement>;
  @ViewChild('adviseInput') adviseInput!: ElementRef<HTMLInputElement>;
  readonly separatorKeysCodesMed = [ENTER, COMMA] as const;
  readonly separatorKeysCodesfamily = [ENTER, COMMA] as const;
  separatorKeysCodes: number[] = [ENTER, COMMA];


  complaintCtrl = new FormControl('');

  DiagnosisCtrl = new FormControl('');
  adviseCtrl = new FormControl('');
  MedicalHistoryCtrl = new FormControl('');
  familyHistoryCtrl = new FormControl('');
  drugAllergyCtrl = new FormControl('');
  otherAllergyCtrl = new FormControl('');
  surgeryCtrl = new FormControl('');
  immuniazationHistoryCtrl = new FormControl('');
  examinationNotesCtrl = new FormControl('');

  filteredComplaint: Observable<string[]>;
  filteredDiagnosis: Observable<string[]>;
  filteredAdvise: Observable<string[]>;


  complaint: any = [];

  diagnosis: string[] = [];
  advise: string[] = [];
  allMedicalHistory: string[] = [];
  allFamilyHistory: string[] = [];
  allDrugAllergy: string[] = [];
  allOtherAllergy: string[] = [];
  allSurgery: string[] = [];
  allimmuniazationHistory: string[] = [];
  allDrug: any = [];
  id: any;
  patientId:any;
  doctorId:any;
  appointmentId:any;
  allAppointmentData: any = [];
  loggedDoctorId:any;
  routePatientId : any;
  

  medical_specializations = [
    "MS. Orthopedic Surgery",
    "MS. Neurosurgery",
    "MS. Pediatric Surgery",
    "MD. Pediatrics",
    "MD. Psychiatry",
    "MD. Dermatology",
    "MS. General Surgery",
    "MD. Ophthalmology",
    "MS. Obstetrics and Gynecology",
    "MS. Otorhinolaryngology (ENT)",
    "MS. Plastic Surgery",
    "MS. Cardiothoracic Surgery",
    "DM. Cardiology",
    "DM. Neurology",
    "DM. Nephrology",
    "DM. Gastroenterology",
    "DM. Endocrinology",
    "DM. Rheumatology",
    "DM. Medical Oncology",
    "M.Ch. Cardiothoracic and Vascular Surgery",
    "M.Ch. Neurosurgery",
    "M.Ch. Urology",
    "M.Ch. Pediatric Surgery",
    "M.Ch. Surgical Gastroenterology",
    "M.Ch. Endocrine Surgery",
    "MBBS",
    "BDS. Dental",
    "BAMS. Ayurveda",
    "BHMS. Homeopathy",
    "BUMS. Unani Medicine",
    "PHYSIOTHERAPY",
    "CHIROPRACTOR",
    "OSTEOPATHY",
    "DIETICIAN & NUTRITION",
    "ACUPUNCTURE",
    "ACUPRESSURE",
    "SPEECH THERAPY",
    "OCCUPATIONAL THERAPY",
    "PSYCHOLOGY",
    "AUDIOLOGY",
    "ORTHOTICS & PROSTHETICS",
    "YOGA",
    "FITNESS TRAINER",
    "NATUROPATHY & YOGIC SCIENCE",
    "OTHERS"
  ]
  allChiefComplaint: string[] =
    ['High blood pressure condition', 'Type 2 Diabetes', "Bone pain", "Fever", "Fatigue", "Weakness", "Bloated abdomen", "Pain in lower limb",
      "Pain in upper limb", "Hip pain", "Moderate Pain", "Neck Pain", "Leg Pain", "Difficulty Sleeping", "Vertigo",
      "Plantar fasciitis", "Numbness", 'Migraine', 'Recurrent headaches often accompanied by nausea', 'backpain'];
  allDiagnosis: string[] =
    ["Lumbar spondylosis", "Coccydynia", "Frozen shoulder", "Bicipital tendinitis", "Cervicogenic headache",
      "Ankylosing spondylitis", "Neuropathy", "Peripheral neuropathy", "Cervical spondylitis", "Osteoarthritis", "Osteoarthritis",
      "Osteoarthritis of both knee joints", "Pain in elbow", "Swelling", "Pain radiating to left leg", "Radial nerve compression", "Loss of lordosis", "Tingling sensation"]

  allAdvise: string[] = ["Physiotherapy as advised/rest local heat", "Chiropractic rx once in week", "Streaching ex as prescribed in physiapp",
    "Physio 1 week", "X ray ls-ap lat view", "Regular exercise as prescribed in app", "Mri lumber spine with screening",]
  // Accordian
  items = ['Item 1'];
  expandedIndex = 0;

  constructor(
    private _fb: FormBuilder,
    private Companyservice: CompanyService,
    private activatedRoute: ActivatedRoute,
    private route: Router

  ) {
    this.filteredComplaint = this.complaintCtrl.valueChanges.pipe(
      startWith(null),
      map((complaint: string | null) => (complaint ? this._filter(complaint) : this.allChiefComplaint.slice())),
    );
    this.filteredDiagnosis = this.DiagnosisCtrl.valueChanges.pipe(
      startWith(null),
      map((diag: string | null) => (diag ? this._filterDiag(diag) : this.allDiagnosis.slice())),
    );
    this.filteredAdvise = this.adviseCtrl.valueChanges.pipe(
      startWith(null),
      map((advise: string | null) => (advise ? this._filterAdvise(advise) : this.allAdvise.slice())),
    );
  }
  ngOnInit(): void {
    const snapshot =this.activatedRoute.snapshot;
    this.appointmentId = snapshot.queryParams['aId'];
    this.routePatientId = snapshot.queryParams['patientId'];
    
    this.loggedDoctorId = sessionStorage.getItem('admin_id');

  
    this.Companyservice.getConsultationByDocPatientId(this.routePatientId, this.loggedDoctorId).subscribe({
      next: (res)=>{
        this.pastVisitData = res
        let filteredMedications = this.pastVisitData.filter(data => JSON.parse(data.medication))
        console.log(filteredMedications)

      }
    })

   
      
      this.Companyservice.getAppointmentById(this.appointmentId).subscribe({
        next: (res) => {
          this.allAppointmentData = res;
      
          this.patientId = this.allAppointmentData[0].patientId;
          //  console.log(this.patientId, "patientid")
          console.log(this.allAppointmentData, "APPDOERGDGG")
          this.doctorId = this.allAppointmentData[0].doctorId;
          if(this.appointmentId){
            this.complaint = this.allAppointmentData[0].chiefcomplaint
            console.log(this.complaint)
          }
          // this.addConsultationForm.patchValue({ chiefComplaints: this.allAppointmentData[0].chiefcomplaint })
          this.addConsultationForm.patchValue({ bloodPressure: this.allAppointmentData[0].bloodpressure })
          this.addConsultationForm.patchValue({ SPO2: this.allAppointmentData[0].spo2 })
          this.addConsultationForm.patchValue({ height: this.allAppointmentData[0].height })
          this.addConsultationForm.patchValue({ heightUnit: this.allAppointmentData[0].heightUnit })
          this.addConsultationForm.patchValue({ weight: this.allAppointmentData[0].weight })
          this.addConsultationForm.patchValue({ weightUnit: this.allAppointmentData[0].weightUnit })
          this.addConsultationForm.patchValue({ temperature: this.allAppointmentData[0].temperature })
          this.addConsultationForm.patchValue({ temperatureUnit: this.allAppointmentData[0].temperatureUnit })
          this.addConsultationForm.patchValue({ weightUnit: this.allAppointmentData[0].weightUnit })
  
          this.Companyservice.getConsultationByAppDocPatientId(this.appointmentId, this.patientId, this.loggedDoctorId).subscribe({
            next:(res)=>{
              console.log(res, "getConsultation")
            }
          })
        }
      })
  
  
   
    this.onPageLoad()
  }
  onPageLoad() {
   
    this.addConsultationForm = this._fb.group({
      chiefComplaints: ["", Validators.required],
      bloodPressure: [""],
      //EXAMINATION
      SPO2: [""],
      height: [""],
      weight: [""],
      temperature: [""],
      heightUnit: [""],
      weightUnit: [""],
      temperatureUnit: [""],
      examinationNotes: [this.allExam],
      //EXAMINATION END
      diagnosis: [this.diagnosis, Validators.required],
      advise: [this.advise, Validators.required],
      //added
      extraNote: [""],
      therapiesAndTreatment: [""],
      noOfSessionAdvised: [""],
      sessionAdvisedDaysWeek: [""],
      referTo: [""],
      superSpeciality: [""],
      //MEDICAL bACKGROUYND
      medicalHistory: [this.allMedicalHistory],
      familyHistory: [this.allFamilyHistory],
      drugAllergies: [this.allDrugAllergy],
      otherAllergies: [this.allOtherAllergy],
      surgeries: [this.allSurgery],
      immunizationHistory: [this.allimmuniazationHistory],
      //
      attachmentType: [""],
      attachmentFile: [""],
      //Follow up
      followupNumberOfDaysWeeks: ["", Validators.required],
      followupFrequency: ["", Validators.required],
      followupDate: ["", Validators.required],
      followupTime: [""],
      typeOfConsultation: ["", Validators.required],
      followupNotes: ["", Validators.required],
      //id
      patientId: [this.routePatientId],
      doctorId : [this.loggedDoctorId],
      appointmentId: [this.appointmentId],
      invoiceNumber: [""],
     //formarray
      medication: new FormArray([]),
    })

    this.Companyservice.getDrugs().subscribe({
      next: (res) => {
        this.allDrug = res;
        console.log(this.allDrug, "drug")
      }
    })
  }
  get medication(): FormArray {
    return this.addConsultationForm.get('medication') as FormArray
  }
  addMedicationControl() {
    const newControl = this._fb.group({
      //MEDICATION
      prescribedMedicine: ["", Validators.required],
      numberOfDosage: ["", Validators.required],
      unitOfDosage: ["", Validators.required],
      frequencyOfDosage: ["", Validators.required],
      timingOfDosage: ["", Validators.required],
      durationOfDosageInNumber: ["", Validators.required],
      durationOfDosageInUnit: ["", Validators.required],
    })
    this.medication.push(newControl)
  }

  OnuploadAttachment(event: any) {
    console.log(event.target.files);
    if (event.target.files.length > 0) {
      this.attachmentFile = event.target.files[0];

    }
    if (event.target.files && event.target.files[0]) {
      const filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {

        const reader = new FileReader();
        reader.onload = (event: any) => {
        }

        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }
  // 
  _filterDiag(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allDiagnosis.filter(diag => diag.toLowerCase().includes(filterValue));
  }
  _filterAdvise(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allAdvise.filter(advise => advise.toLowerCase().includes(filterValue));
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    console.log(value)
    if (value) {
      this.complaint.push(value);
    }
    this.complaintCtrl.setValue(this.complaint);
  }
  addDiag(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.diagnosis.push(value);
    }
    event.chipInput!.clear();

    this.DiagnosisCtrl.setValue(null);
  }
  addAdvise(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.advise.push(value);
    }
    event.chipInput!.clear();

    this.adviseCtrl.setValue(null);
  }
  addExam(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.allExam.push(value);
    }
    event.chipInput!.clear();
  }
  addMed(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.allMedicalHistory.push(value);
    }


    event.chipInput!.clear();
  }
  addFamilyHistory(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.allFamilyHistory.push(value);
    }


    event.chipInput!.clear();
  }
  addDrugAllergy(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.allDrugAllergy.push(value);
    }
    event.chipInput!.clear();
  }
  addOtherAllergy(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.allOtherAllergy.push(value);
    }
    event.chipInput!.clear();
  }
  addSurgery(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.allSurgery.push(value);
    }
    event.chipInput!.clear();
  }
  addImmnunizationHistory(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.allimmuniazationHistory.push(value);
    }
    event.chipInput!.clear();
  }

  removeExam(exam: any): void {
    const index = this.allExam.indexOf(exam);

    if (index >= 0) {
      this.allExam.splice(index, 1);
    }
  }
  removeMed(med: any): void {
    const index = this.allMedicalHistory.indexOf(med);

    if (index >= 0) {
      this.allMedicalHistory.splice(index, 1);
    }
  }
  removeFamilyHistory(med: any): void {
    const index = this.allFamilyHistory.indexOf(med);

    if (index >= 0) {
      this.allFamilyHistory.splice(index, 1);
    }
  }
  removeDrugAllrgy(med: any): void {
    const index = this.allDrugAllergy.indexOf(med);

    if (index >= 0) {
      this.allDrugAllergy.splice(index, 1);
    }
  }
  removeSurgery(med: any): void {
    const index = this.allSurgery.indexOf(med);

    if (index >= 0) {
      this.allSurgery.splice(index, 1);
    }
  }
  removeImmunization(med: any): void {
    const index = this.allimmuniazationHistory.indexOf(med);

    if (index >= 0) {
      this.allimmuniazationHistory.splice(index, 1);
    }
  }

  removeOtherAllrgy(med: any): void {
    const index = this.allOtherAllergy.indexOf(med);

    if (index >= 0) {
      this.allOtherAllergy.splice(index, 1);
    }
  }

  edit(exam: any, event: MatChipEditedEvent) {
    const value = event.value.trim();

    if (!value) {
      this.remove(exam);
      return;
    }
    const index = this.allExam.indexOf(exam);
    if (index >= 0) {
      this.allExam[index] = value;
    }
  }
  editMed(med: any, event: MatChipEditedEvent) {
    const value = event.value.trim();

    if (!value) {
      this.remove(med);
      return;
    }
    const index = this.allMedicalHistory.indexOf(med);
    if (index >= 0) {
      this.allMedicalHistory[index] = value;
    }
  }
  editfamily(family: any, event: MatChipEditedEvent) {
    const value = event.value.trim();

    if (!value) {
      this.remove(family);
      return;
    }
    const index = this.allFamilyHistory.indexOf(family);
    if (index >= 0) {
      this.allFamilyHistory[index] = value;
    }
  }
  editDrug(drug: any, event: MatChipEditedEvent) {
    const value = event.value.trim();

    if (!value) {
      this.remove(drug);
      return;
    }

    const index = this.allDrugAllergy.indexOf(drug);
    if (index >= 0) {
      this.allDrugAllergy[index] = value;
    }
  }
  editOther(other: any, event: MatChipEditedEvent) {
    const value = event.value.trim();

    if (!value) {
      this.remove(other);
      return;
    }

    const index = this.allOtherAllergy.indexOf(other);
    if (index >= 0) {
      this.allOtherAllergy[index] = value;
    }
  }
  editSurgery(surgery: any, event: MatChipEditedEvent) {
    const value = event.value.trim();

    if (!value) {
      this.remove(surgery);
      return;
    }

    const index = this.allSurgery.indexOf(surgery);
    if (index >= 0) {
      this.allOtherAllergy[index] = value;
    }
  }
  editImmunization(immunization: any, event: MatChipEditedEvent) {
    const value = event.value.trim();

    if (!value) {
      this.remove(immunization);
      return;
    }

    const index = this.allimmuniazationHistory.indexOf(immunization);
    if (index >= 0) {
      this.allOtherAllergy[index] = value;
    }
  }


  remove(fruit: string): void {
    const index = this.complaint.indexOf(fruit);

    if (index >= 0) {
      this.complaint.splice(index, 1);
    }
  }
  removeDiag(diag: string): void {
    const index = this.diagnosis.indexOf(diag);

    if (index >= 0) {
      this.diagnosis.splice(index, 1);
    }
  }
  removeAdvise(advise: string): void {
    const index = this.advise.indexOf(advise);

    if (index >= 0) {
      this.advise.splice(index, 1);
    }
  }


  selected(event: MatAutocompleteSelectedEvent): void {
    this.complaint.push(event.option.viewValue);
    this.complaintInput.nativeElement.value = '';
    this.complaintCtrl.setValue(null);
  }
  selectedDiag(event: MatAutocompleteSelectedEvent): void {
    this.diagnosis.push(event.option.viewValue);
    this.diagnosisInput.nativeElement.value = '';
    this.DiagnosisCtrl.setValue(null);
  }
  selectedAdvise(event: MatAutocompleteSelectedEvent): void {
    this.advise.push(event.option.viewValue);
    this.adviseInput.nativeElement.value = '';
    this.adviseCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allChiefComplaint.filter(fruit => fruit.toLowerCase().includes(filterValue));
  }

  saveConsulatation() {

     console.log(this.addConsultationForm.value);

    if (this.addConsultationForm.invalid) {
      this.checkForm = true;
      
    }
    
    let formData = new FormData();
    this.addConsultationForm.get('chiefComplaints')?.setValue(this.complaint)
    formData.append('attachmentFile', this.attachmentFile)
    const KeyArray = [
      "chiefComplaints",
      "bloodPressure", "SPO2", "height", "weight", "temperature", "heightUnit", "weightUnit", "temperatureUnit", "examinationNotes",
      "diagnosis",
      "advise",
      "medication", "prescribedMedicine", "numberOfDosage", "unitOfDosage", "frequencyOfDosage", "timingOfDosage", "durationOfDosageInNumber", "durationOfDosageInUnit",
      "extraNote", "therapiesAndTreatment", "noOfSessionAdvised", "sessionAdvisedDaysWeek", "referTo", "superSpeciality",
      "medicalHistory", "familyHistory", "drugAllergies", "otherAllergies", "surgeries", "immunizationHistory",
      "attachmentType",
      "followupNumberOfDaysWeeks", "followupFrequency", "followupDate", "followupTime", "typeOfConsultation", "followupNotes",
       "patientId", "doctorId", "appointmentId","invoiceNumber"
    ]

     
    for (let key of KeyArray) {

      if (key == 'medication') {
        formData.append(key, JSON.stringify(this.addConsultationForm.get(key)?.value));
      } else {

        formData.append(key, this.addConsultationForm.get(key)?.value);
      }
    }
    this.Companyservice.addConsultation(formData).subscribe({
      next: (res) => {
        console.log("data added ");
        const queryParams = {
          appId : this.appointmentId,
          pid: this.routePatientId
        }
        this.route.navigate(["/super-admin/printprscrptn"], {queryParams})
      }
    })
  }
  cancel(){
    this.route.navigate(["/super-admin/allpatient/"+ this.routePatientId])
  }


}
