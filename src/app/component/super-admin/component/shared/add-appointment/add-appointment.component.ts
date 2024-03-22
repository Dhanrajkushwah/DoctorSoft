import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CompanyService } from '../../../services/company.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { ServiceService } from 'src/app/auth/authservice/service.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.scss']
})
export class AddAppointmentComponent {
  panelOpenState = false;
  appointmentForm!: FormGroup;
  checkForm: boolean = false;
  allDoctor: any = [];
  allDepartment: any = [];
  id: any;
  patientId: any;
  patientByIdData: any;
  getAppointById: any = [];
  getAppointSlot: any = [];
  morning: any = [];
  newmorning: any = [];
  afternoon: any = [];
  eveningSession: any = [];
  nightSession: any = [];
  date: any
  type: any = []
  button: any = ['Morning', 'Afteroon', 'Evening', 'Night']
  selectedDate: any
  doctor_id: any;
  allChiefComplaint: string[] =
    ['High blood pressure condition', 'Type 2 Diabetes', "Bone pain", "Fever", "Fatigue", "Weakness", "Bloated abdomen", "Pain in lower limb",
      "Pain in upper limb", "Hip pain", "Moderate Pain", "Neck Pain", "Leg Pain", "Difficulty Sleeping", "Vertigo",
      "Plantar fasciitis", "Numbness", 'Migraine', 'Recurrent headaches often accompanied by nausea', 'backpain'];
  complaint: string[] = [];
  complaintCtrl = new FormControl('');
  @ViewChild('complaintInput') complaintInput!: ElementRef<HTMLInputElement>;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  filteredComplaints: Observable<string[]>;
  loggedeInPatientData: any = [];
  client_id: any;
  appointmentData: any = []
  Selected: boolean =true;

  constructor(
    private _fb: FormBuilder,
    private _comapnyService: CompanyService,
    private _router: Router,
    private activatedRoute: ActivatedRoute,
    private _profileData: ServiceService,
    private datePipe: DatePipe
  ) {
    this.doctor_id = sessionStorage.getItem("admin_id");
    this.client_id = sessionStorage.getItem("client_id");
    this.filteredComplaints = this.complaintCtrl.valueChanges.pipe(
      startWith(null),
      map((complaint: string | null) => (complaint ? this._filter(complaint) : this.allChiefComplaint.slice())),
    );

    this.appointmentForm = this._fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      dateofBirth: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required],
      phone: ['', Validators.required],
      type: ['', Validators.required],
      meeting: ['', Validators.required],
      datetime: [this.getToday(), Validators.required],
      chiefcomplaint: [this.complaint],
      bloodpressure: [''],
      spo2: [''],
      height: [''],
      heightUnit: [''],
      weight: [''],
      weightUnit: [''],
      temperature: [''],
      temperatureUnit: [''],
      location: [''],
      email: [''],
      reference: [''],
      slot: [''],
      doctorId: [this.doctor_id]
    });
  }

  ngOnInit(): void {
    this.selectedDate = this.getToday()
    this.pageLode(this.doctor_id, this.selectedDate);
    this._comapnyService.getAppointmentbyid(this.doctor_id).subscribe(res => {
      this.appointmentData = res
      this.appointmentData = res.filter((ele: any) =>
        this.datePipe.transform(ele.createdAt, 'YYYY-MM-dd') == this.datePipe.transform(new Date(), 'YYYY-MM-dd')
      )
    })
    this.activatedRoute.params.subscribe((params: Params) => {
      this.patientId = params["id"];
    })
    if (this.patientId) {

      this._comapnyService.getpatientById(this.patientId).subscribe({
        next: (res) => {
          this.patientByIdData = res;
          console.log(this.patientByIdData, "patientByid")
          this.appointmentForm.patchValue({ firstname: this.patientByIdData[0].firstname })
          this.appointmentForm.patchValue({ lastname: this.patientByIdData[0].lastname })
          this.appointmentForm.patchValue({ dateofBirth: this.patientByIdData[0].dateOfBirth })
          this.appointmentForm.patchValue({ age: this.patientByIdData[0].age })
          this.appointmentForm.patchValue({ gender: this.patientByIdData[0].gender })
          this.appointmentForm.patchValue({ phone: this.patientByIdData[0].phone })
          this.appointmentForm.patchValue({ email: this.patientByIdData[0].email })
          this.appointmentForm.patchValue({ location: this.patientByIdData[0].address })
        }
      })
    }
  }

  typeConsultation(event: any) {
    console.log(event.target.value);
    if (event.target.value==="Online") {
      window.open('https://zoom-8qxn.onrender.com')
      this.Selected = false;
    }
    else{
      delete this.appointmentForm.value.meeting
      this.Selected = true;
    }
  }

  getToday(): string {
    return new Date().toISOString().split('T')[0]
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allChiefComplaint.filter(complaints => complaints.toLowerCase().includes(filterValue));
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.complaint.push(value);
    }
    event.chipInput!.clear();
    this.complaintCtrl.setValue(null);
  }

  remove(complaint: string): void {
    const index = this.complaint.indexOf(complaint);

    if (index >= 0) {
      this.complaint.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.complaint.push(event.option.viewValue);
    this.complaintInput.nativeElement.value = '';
    this.complaintCtrl.setValue(null);
  }

  dateChange(e: any) {
    this.selectedDate = e.target.value
    this.pageLode(this.doctor_id, this.selectedDate);
  }

  pageLode(doctorId: any, selectedDate: any) {
    this.type = []
    this._comapnyService.getAppointmentSlotById(doctorId, selectedDate).subscribe({
      next: (res) => {
        console.log(res, "getbyid");
        this.getAppointSlot = res;
        this.getAppointSlot.forEach((element: any) => {
          this.morning = element.morningSession
          this.slotType(this.button[0])
          this.afternoon = element.afternoonSession
          this.eveningSession = element.eveningSession
          this.nightSession = element.nightSession
        });
      }
    })
  }

  slotType(slotValue: any) {
    if (slotValue == 'Morning') {
      this.type = []
      Object.values(this.morning).forEach(val => {
        let { morningSessionFrom }: any = val
        this.type.push(morningSessionFrom)
      });
      console.log(this.type);
      console.log(this.appointmentData);
    }
    else if (slotValue == 'Afteroon') {
      this.type = []
      Object.values(this.afternoon).forEach(val => {
        let { afternoonTimeFrom }: any = val
        this.type.push(afternoonTimeFrom)
      });
    }
    else if (slotValue == 'Evening') {
      this.type = []
      Object.values(this.eveningSession).forEach(val => {
        let { eveningTimeFrom }: any = val
        this.type.push(eveningTimeFrom)
      });
    }
    else if (slotValue == 'Night') {
      this.type = []
      Object.values(this.nightSession).forEach(val => {
        let { nightTimeFrom }: any = val
        this.type.push(nightTimeFrom)
      });
    }

  }

  slot(value: any) {
    this.appointmentForm.patchValue({ slot: value })
  }

  saveAppointment() {
    if (this.appointmentForm.invalid) {
      this.checkForm = true;
      return
    }
    else {
      console.log("Appoiment", this.appointmentForm.value);
      this._comapnyService.addAppointment(this.appointmentForm.value).subscribe({
        next: (res) => {
          console.log("data added", res);
          this._router.navigate(["/super-admin/patient"])
        },
        error: (err) => {
          console.log(err, "error in appointment post api")
        }
      })
      delete this.appointmentForm.value.datetime
      delete this.appointmentForm.value.chiefcomplaint
      delete this.appointmentForm.value.patientId
      delete this.appointmentForm.value.bloodpressure
      delete this.appointmentForm.value.spo2
      delete this.appointmentForm.value.height
      delete this.appointmentForm.value.heightUnit
      delete this.appointmentForm.value.weight
      delete this.appointmentForm.value.weightUnit
      delete this.appointmentForm.value.temperature
      delete this.appointmentForm.value.temperatureUnit
      delete this.appointmentForm.value.location
      delete this.appointmentForm.value.reference
      delete this.appointmentForm.value.slot

      this._comapnyService.addPatient(this.appointmentForm.value).subscribe({
        next: (res) => {
          console.log("data added", res);
          this._router.navigate(["/super-admin/patient"])
        },
        error: (err) => {
          console.log(err, "error in appointment post api")
        }
      })
    }
  }

  navigatePatient() {
    this._router.navigate(["/super-admin/patient"])
  }

  cancelCoupan() {
    this._router.navigate(["/super-admin/patient"])
  }
}

