import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CompanyService } from '../../../services/company.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.scss']
})
export class AddDepartmentComponent implements OnInit {

  adddepartment!:FormGroup;
  ckDep: boolean = false;
  removeClass = true;
  getSpecializationById : any= []

  selectedIncomedata: any;
  editData = false;
  data: any;
  id: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: CompanyService,
    private activateRoute: ActivatedRoute,
  )
  {}

  ngOnInit(){
    this.adddepartment = this.fb.group({
      specialization : ['', Validators.required],
     })
     this.activateRoute.params.subscribe(
      (params : Params)=>{
        this.id =params["id"]
      }
    )
    this.service.getSpecializationById(this.id).subscribe({
      next: (res)=>{
        console.log(res)
        this.getSpecializationById = res;
        this.adddepartment.patchValue({specialization: this.getSpecializationById[0].specialization})
      }
    })
  }

  opensend() {
    this.router.navigate(["/super-admin/department"])
  }

  removeBtn() {
    this.removeClass = !this.removeClass;
  }

createNewUser(){
  if ( this.adddepartment.invalid) {
      this.ckDep = true;
      return
  }else{
      this.service.addspacialization(this.adddepartment.value).subscribe({
        next: (res)=>{
          this.router.navigate(["super-admin/department"])
        },
        error: (err)=>{console.log(err)}
        })
  }
}

updatedepartmentss(){
  this.service.updateSpecialization(this.id, this.adddepartment.value).subscribe({
    next: (res)=>{
      console.log("updated", res);
      this.router.navigate(["/super-admin/department"])
    }
  })
  }
}

