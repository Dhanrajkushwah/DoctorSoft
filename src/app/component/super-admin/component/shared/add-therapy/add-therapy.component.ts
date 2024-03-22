import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CompanyService } from '../../../services/company.service';
@Component({
  selector: 'app-add-therapy',
  templateUrl: './add-therapy.component.html',
  styleUrls: ['./add-therapy.component.scss']
})
export class AddTherapyComponent implements OnInit {

  addphyscialhealsss!: FormGroup;
  ck: boolean = false;
  id: any;
  getPhysicalHealthById : any= []

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: CompanyService,
    private activatedRoute : ActivatedRoute
    ) { }


  ngOnInit(): void {
    this.addphyscialhealsss = this.fb.group({
      physicalHealth: ['', Validators.required],
    })
    this.activatedRoute.params.subscribe(
      (params : Params)=>{
        this.id =params["id"]
      }
    )
    this.service.getPhysicalHealthById(this.id).subscribe({
      next: (res)=>{
        console.log("getById console",res)
        this.getPhysicalHealthById = res;
        this.addphyscialhealsss.patchValue({physicalHealth: this.getPhysicalHealthById[0].physicalHealth})
      }
    })
  }
 

  addphysicalhealthss() {
    if (this.addphyscialhealsss.invalid) {
      this.ck = true;
      return
    }
    else {
      this.service.addPhysicalHealth(this.addphyscialhealsss.value).subscribe({
        next: (res) => {
          this.router.navigate(["super-admin/invoice"])
        },
        error: (err) => { console.log(err) }
      })
    }
  }



update(){
  this.service.editPhysicalHealth(this.id, this.addphyscialhealsss.value).subscribe({
    next:(res)=>{
      console.log("updated", res);
      this.router.navigate(["/super-admin/invoice"])
    }
  })
}

  opensend() {
    this.router.navigate(["/super-admin/invoice/add"])
  }
  cancelCoupan() {
    this.router.navigate(["super-admin/invoice"])
  }

}
