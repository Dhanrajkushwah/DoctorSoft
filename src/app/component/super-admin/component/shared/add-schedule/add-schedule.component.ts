import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CompanyService } from '../../../services/company.service';
@Component({
  selector: 'app-add-schedule',
  templateUrl: './add-schedule.component.html',
  styleUrls: ['./add-schedule.component.scss']
})
export class AddScheduleComponent {
  doctorData: any =[]
  selectarr: any = ['Monday', 'Tuesday',' Wednesday',  'Thursday',   'Friday','Saturday', 'Sunday']
  addDoctorform!: FormGroup;
  ckDep: boolean = false;
  pid: any;
  ProductbyIdData: any = []
  url: any;
  imgs!:File;
  removeClass = true;
  imagesBox = '../../../../../../assets/img/product/product1.jpg'
  constructor(
    private fb: FormBuilder,
     private router: Router,
      private service: CompanyService,
       private route: ActivatedRoute
    ) {
    this.addDoctorform = this.fb.group({
      selectDoctor: ['', Validators.required],
      selectDay: ['', Validators.required],
      startTime: ['', Validators.required],
      endtime: ['', Validators.required],
      perPatientTime: ['', Validators.required],
      visibility: ['', Validators.required],
    })
  }

  opeschedule() {
    this.router.navigate(["/super-admin/schedule"])
  }

  ngOnInit(): void {
    this.getDoctors();
  }

  addDoctor() {
    if (this.addDoctorform.invalid) {
      this.ckDep = true;
      return
    } 
    else {
        console.log(this.addDoctorform.value)
      this.service.addschedule(this.addDoctorform.value).subscribe({
        next: (res)=>{
          this.router.navigate(["super-admin/schedule"])
        },
        error: (err)=>{console.log(err)}
        })
      }
}

  removeBtn() {
    this.removeClass = !this.removeClass;
  }

  getDoctors() {
    this.service.getDoctor().subscribe(res => {
      this.doctorData = res
      console.log("DoctorData",this.doctorData);
    })
  }

}
 
