import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CompanyService } from '../../../services/company.service';

@Component({
  selector: 'app-add-doctor-session',
  templateUrl: './add-doctor-session.component.html',
  styleUrls: ['./add-doctor-session.component.scss']
})
export class AddDoctorSessionComponent {
  adddoctorsessform!: FormGroup;
  ck: boolean = false;
  departmentData: any = [];
  getDoctoreSessionById: any = []
  doctorData: any = [];
  url: any;
  id: any;
  doctor_id: any;
  doctor_name: any;
  imgs!: File;
  removeClass = true;
  inputValue: string = '';
  doctorname!: any
  clinicName!: any
  allDoctor: any = []; allAppoint: any = []; allClinic: any = [];
  selectarr: any = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private service: CompanyService) {
      this.doctor_id = sessionStorage.getItem("admin_id");
      this.doctor_name = sessionStorage.getItem("admin_name");

      
     }

  ngOnInit(): void {
    this.adddoctorsessform = this.fb.group({
      doctorname: [this.doctor_name, Validators.required],
      timeSlot: ['', Validators.required],
      morningSession: new FormArray([]),
      afternoonSession: new FormArray([]),
      eveningSession : new FormArray([]),
      nightSession : new FormArray([]),
      selectDay: ['', Validators.required],
      doctorId: [this.doctor_id, Validators.required],
      date: ['', Validators.required]
    })
    this.OnPageLoad();
    this.getDoctors();
    this.getToday();
  }
  get morningSession(): FormArray {
    return this.adddoctorsessform.get("morningSession") as FormArray
  }
  get afternoonSession(): FormArray {
    return this.adddoctorsessform.get("afternoonSession") as FormArray
  }
  get eveningSession(): FormArray {
    return this.adddoctorsessform.get("eveningSession") as FormArray
  }
  get nightSession(): FormArray {
    return this.adddoctorsessform.get("nightSession") as FormArray
  }
  addMorningControl() {
    const morningControl = this.fb.group({
      morningSessionFrom: [''],
      morningSessionTo: [''],
    })
    this.morningSession.push(morningControl);

  }
  addAfternoonControl() {
    const afternoonSessionControl = this.fb.group({
      afternoonTimeTo: [''],
      afternoonTimeFrom: [''],
    })
    this.afternoonSession.push(afternoonSessionControl)
  }
  addEveningControl() {
    const EveningSessionControl = this.fb.group({
      eveningTimeFrom: [''],
      eveningTimeTo: [''],

    })
    this.eveningSession.push(EveningSessionControl)
  }

  addNightControl() {
    const NightSessionControl = this.fb.group({
      nightTimeFrom: [''],
      nightTimeTo: [''],
    })
    this.nightSession.push(NightSessionControl)
  }
  deleteMorningSession(index:any){
    console.log(index)
    this.morningSession.removeAt(index);
  }
  deleteAfternoonSession(index:any){
    this.afternoonSession.removeAt(index);
  }
  deleteEveningSession(index:any){
    this.eveningSession.removeAt(index);
  }
  deletNightSession(index:any){
   this.nightSession.removeAt(index);
  }

  OnPageLoad() {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.id = params["id"]
      }
    )
    if (this.id) {
      this.service.getDoctoreSessionById(this.id).subscribe({
        next: (res) => {
          console.log(res)
          this.getDoctoreSessionById = res;
          // console.log(this.getDoctoreSessionById[0].encounterDate);
          this.adddoctorsessform.patchValue({ doctorname: this.getDoctoreSessionById[0].doctorname })
          this.adddoctorsessform.patchValue({ timeSlot: this.getDoctoreSessionById[0].timeSlot })
          this.adddoctorsessform.patchValue({ morningSessionFrom: this.getDoctoreSessionById[0].morningSessionFrom })
          this.adddoctorsessform.patchValue({ morningSessionTo: this.getDoctoreSessionById[0].morningSessionTo })
          this.adddoctorsessform.patchValue({ afternoonTimeFrom: this.getDoctoreSessionById[0].afternoonTimeFrom })
          this.adddoctorsessform.patchValue({ afternoonTimeTo: this.getDoctoreSessionById[0].afternoonTimeTo })
          this.adddoctorsessform.patchValue({ eveningTimeFrom: this.getDoctoreSessionById[0].eveningTimeFrom })
          this.adddoctorsessform.patchValue({ eveningTimeTo: this.getDoctoreSessionById[0].eveningTimeTo })
          this.adddoctorsessform.patchValue({ nightTimeFrom: this.getDoctoreSessionById[0].nightTimeFrom })
          this.adddoctorsessform.patchValue({ nightTimeTo: this.getDoctoreSessionById[0].nightTimeTo })
          this.adddoctorsessform.patchValue({ selectDay: this.getDoctoreSessionById[0].selectDay })
        }
      })
    }

  }
  getDoctors() {
    this.service.getdoctor().subscribe(res => {
      this.doctorData = res
      console.log("DoctorData", this.doctorData);
    })

  }
  getToday(): string {
    return new Date().toISOString().split('T')[0]
  }
  handleChange(e: any) {
    console.log(e);

  }

  numberOnly(event: any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  adddoctorsess() {
    // console.log(this.adddoctorsessform)

    console.log("session",this.adddoctorsessform.value);
    this.service.addDoctorsSession(this.adddoctorsessform.value).subscribe({
      next: (res) => {
        this.router.navigate(["super-admin/doctorsession"])
      },
      error: (err) => { console.log(err) }
    })


    return
    
    var total = this.adddoctorsessform.value.morningSessionTo;
    var total1 = this.adddoctorsessform.value.morningSessionFrom;
    var total2 = this.adddoctorsessform.value.afternoonTimeTo;
    var total3 = this.adddoctorsessform.value.afternoonTimeFrom;

    //my work 
    var total4 = this.adddoctorsessform.value.eveningTimeTo;
    var total5 = this.adddoctorsessform.value.eveningTimeFrom;
    var night6 = this.adddoctorsessform.value.nightTimeTo;
    var total7 = this.adddoctorsessform.value.nightTimeFrom;

    // var aatt = parseInt(total4.split(':')[0]);
    // var aa11 = parseInt(total4.split(':')[1]);
    // var aa22 = parseInt(total5.split(':')[0]);
    // var aa33 = parseInt(total5.split(':')[1]);

    // var aa44 = parseInt(night6.split(':')[0]);
    // var aa55 = parseInt(night6.split(':')[1]);
    // var aa66 = parseInt(total7.split(':')[0]);
    // var aa77 = parseInt(total7.split(':')[1]);

    // var bcd = aatt - aa22
    // var bcd1 = aa11 - aa33

    // var bcd2 = aa44 - aa66
    // var bcd3 = aa55 - aa77                                            
    // console.log(bcd2);

    // var tt0 = bcd * 60
    // var tt11 = bcd2 * 60
    // var final0 = tt0 + bcd1
    // var final11 = tt11 + bcd3

    // var totalfinal0 = final0 + final11
    // console.log(totalfinal0);


    //my work 
    //sir work
    var aa = parseInt(total.split(':')[0]);
    var aa1 = parseInt(total.split(':')[1]);
    var aa2 = parseInt(total1.split(':')[0]);
    var aa3 = parseInt(total1.split(':')[1]);

    var aa4 = parseInt(total2.split(':')[0]);
    var aa5 = parseInt(total2.split(':')[1]);
    var aa6 = parseInt(total3.split(':')[0]);
    var aa7 = parseInt(total3.split(':')[1]);

    var aatt = parseInt(total4.split(':')[0]);
    var aa11 = parseInt(total4.split(':')[1]);
    var aa22 = parseInt(total5.split(':')[0]);
    var aa33 = parseInt(total5.split(':')[1]);

    var aa44 = parseInt(night6.split(':')[0]);
    var aa55 = parseInt(night6.split(':')[1]);
    var aa66 = parseInt(total7.split(':')[0]);
    var aa77 = parseInt(total7.split(':')[1]);

    //sir work
    var abc = aa - aa2 //60
    var abc1 = aa1 - aa3

    var abc2 = aa4 - aa6 //60
    var abc3 = aa5 - aa7
    console.log(abc2);

    var bcd = aatt - aa22 //60
    var bcd1 = aa11 - aa33

    var bcd2 = aa44 - aa66 //60
    var bcd3 = aa55 - aa77
    console.log(bcd2);

    var tt = abc * 60
    var tt1 = abc2 * 60
    var tt0 = bcd * 60
    var tt11 = bcd2 * 60

    var final = tt + abc1 + tt0 + bcd1
    var final1 = tt1 + abc3 + tt11 + bcd3

    var totalfinal = final + final1  // sabhi ko yaha add krna he 
    console.log(totalfinal);

    if (totalfinal <= this.adddoctorsessform.value.timeslot) {
      alert("time slot value smaller then session value")
      this.ck = true;
      return
    }

    if (this.adddoctorsessform.value.morningSessionFrom >= this.adddoctorsessform.value.morningSessionTo) {
      this.ck = true;
      return
    }

    if (this.adddoctorsessform.value.afternoonTimeFrom >= this.adddoctorsessform.value.afternoonTimeTo) {
      alert("Afternoon Session Start Date not Grater Then End Date")
      this.ck = true;
      return
    }

    if (this.adddoctorsessform.value.eveningTimeFrom >= this.adddoctorsessform.value.eveningTimeTo) {
      alert("Evening Session Start Date not Grater Then End Date")
      this.ck = true;
      return
    }

    if (this.adddoctorsessform.value.nightTimeFrom >= this.adddoctorsessform.value.nightTimeTo) {
      alert("Night Session Start Date not Grater Then End Date")
      this.ck = true;
      return
    }

    if (this.adddoctorsessform.invalid) {
      this.ck = true;
      return
    }

    else {
      console.log(this.adddoctorsessform.value);
      return
      this.service.addDoctorsSession(this.adddoctorsessform.value).subscribe({
        next: (res) => {
          this.router.navigate(["super-admin/doctorsession"])
        },
        error: (err) => { console.log(err) }
      })
    }
  }

  canceldoc() {
    this.router.navigate(["super-admin/doctorsession"])
  }
  doctorChange(event: any) {
    let [name, id] = event.target.value.split(',')

    this.doctorname = name;
    this.adddoctorsessform.get('doctorId')?.setValue(id)
    console.log(this.doctorname);


    // this.service.getAllAppointment(this.doctorName).subscribe({
    //   next: (res) => {
    //     console.log(res)
    //     this.allAppoint = res
    //   }
    // })

  }


  clinicChange(event: any) {
    this.clinicName = event.target.value
    console.log(this.clinicName);
    // this.service.getAllDoctorInAppoint(this.clinicName).subscribe({
    //   next: (res) => {
    //     console.log(res)
    //     this.allDoctor = res
    //   }
    // })
  }

  updateDoctorSession() {
    this.service.updateDoctoreSessionById(this.id, this.adddoctorsessform.value).subscribe({
      next: (res) => {
        console.log("updated", res);
        this.router.navigate(["/super-admin/doctorsession"])
      }
    })
  }





}

