import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { routes } from 'src/app/core/core.index';
import { SweetalertService } from 'src/app/shared/sweetalert/sweetalert.service';
import { CompanyService } from '../../../services/company.service';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-view-prescription',
  templateUrl: './view-prescription.component.html',
  styleUrls: ['./view-prescription.component.scss']
})
export class ViewPrescriptionComponent {
  addPrescription!: FormGroup;
  ck: boolean = false;
  departmentData: any = [];
  patientData: any = [];
  department: any;
  inputValue: string = '';
  yesterday = new Date();
  id:any
  constructor(
    private fb: FormBuilder,
    private router: Router,private route:ActivatedRoute,
    private service: CompanyService) {

      this.yesterday.setDate(this.yesterday.getDate() - 0);
     }

  ngOnInit(): void {
    this.addPrescription = this.fb.group({
      doctorname: ['', Validators.required],
      timeSlot: this.fb.array([]),
      startDate:[''],
      endDate:[''],

    })
    this.department = sessionStorage.getItem("admin-department")
    console.log(this.department);
    this.getAllDepartment();
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    });

  }
  
  medicineName(): FormArray {
    return this.addPrescription.get("timeSlot") as FormArray
  }

  newQuantity(): FormGroup {
    return this.fb.group({
      time: '',
      slot:''
    })
  }

  addQuantity() {
    this.medicineName().push(this.newQuantity());
  }

  removeQuantity(i: number) {
    this.medicineName().removeAt(i);
  }

  onSubmit() {
    console.log(this.addPrescription.value);
  }

  getAllDepartment() {
    this.service.getAllSlot().subscribe(res => {
      this.departmentData = res
      this.addPrescription.patchValue(this.departmentData[0]);
      console.log(this.departmentData[1].timeSlot[0].time);
    
      this.addPrescription.patchValue({ doctorname:this.departmentData[1].doctorname })
          this.addPrescription.patchValue({ startDate: this.departmentData[1].startDate })
          this.addPrescription.patchValue({ endDate: this.departmentData[1].endDate })
   
      this.medicineName().controls.push(this.fb.group({
        time:this.departmentData[2].timeSlot[0].time,
            slot:this.departmentData[2].timeSlot[0].slot,
          }));
          
    })
  

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
      this.service.addPrescription(this.addPrescription.value).subscribe({
        next: (res) => {
          this.router.navigate(["super-admin/prescription"])
        },
        error: (err) => { console.log(err) }
      })
    }

  }

  cancelCoupan() {
    // alert("hello9")
    this.router.navigate(["super-admin/prescription"])
  }

  keyPressNumbers(event: any) {
    var charCode = (event.which) ? event.which : event.keyCode;
    // Only Numbers 0-9
    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }


}





