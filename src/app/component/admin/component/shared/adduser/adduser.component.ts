import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from 'src/app/component/super-admin/services/company.service';
import { routes } from 'src/app/core/core.index';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent {
  userform !:FormGroup ;
  name = 'Angular 6';
  htmlContent = '';
  show: boolean = false;
  show1: boolean = false;
  ckForm = false;
  removeClass = true;
  public routes = routes;
  imgs!:File;
  selectedIncomedata: any;
  editData = false;
  data: any;
  _id :any;
  imagesBox   = '../../../../../../assets/img/product/product1.jpg'
constructor(private fb: FormBuilder,private _company : CompanyService, private activateRoute: ActivatedRoute, private router:Router,
  ) {
    this.activateRoute.queryParams.subscribe(parsam => {
      this.selectedIncomedata = JSON.parse(atob(parsam['data']));
      if (this.selectedIncomedata) {
        this.data = this.selectedIncomedata;
        console.log("datahshddjsdjs",this.data)
        this.editData = true;
      } else {
        this.editData = false;
      }
    });
  }
ngOnInit(){
  this.userform = this.fb.group({
    name: ['', [Validators.required]],
    email : ['', Validators.required],
    password : ['', Validators.required],
    jobtitle : ['', Validators.required],
    image : ['', Validators.required],
    _id : [''],
   })
   this.CheckAddEdit();
}
Onupload(event:any){

  if (event.target.files.length > 0) {
      this.imgs = event.target.files[0];

  }
  if (event.target.files && event.target.files[0]) {
    const filesAmount = event.target.files.length;
    for (let i = 0; i < filesAmount; i++) {
  
            const reader = new FileReader();
              reader.onload = (event:any) => {
              this.imagesBox = event.target.result; 
     
            }
       
       reader.readAsDataURL(event.target.files[i]);
    }
}

}

CheckAddEdit() {
  if (this.data) {
    this.editData = true;
    console.log("Edit DATA: ", this.data);
    this.setCustomerData();
  }
  else {
    // this.setCandidateData() ;
    return;
  }
}
setCustomerData() {
  this.ckForm = true;
  //this.userform.patchValue({password:this.data.password})
 // this.userform.patchValue({jobtitle:this.data.jobtitle})
 console.log(this.data);
 
  this.userform.patchValue({
    _id : this.data._id,
    password:this.data.password,
    jobtitle: this.data.jobtitle,
    name: this.data.name,
    email: this.data.email,
  
  })
}

submit() {
  if ( this.userform.invalid) {
    this.ckForm = true;
    return
  } else {
    if (this.editData) {
      this.updateUser();

    } else {
      console.log("Create Workoutdata Data: ", this.userform.value);
      this.createNewUser();
    }
  }
}

createNewUser(){
  debugger
  if ( this.userform.invalid) {
      this.ckForm = true;
      return
  }else{
    try {
      let formData  = new FormData();
      formData.append('image',this.imgs)
       const arr = ['name' , 'email','password','jobtitle']
      // eslint-disable-next-line prefer-const
      for (let key of arr) {
       
        formData.append(key, this.userform.get(key)?.value)
      }
      
      this._company.addUser(formData).subscribe({
        next : (res) =>{
          this.router.navigate(["admin/user"])
          console.log(res)
        },
        error : (err) =>{
          console.log(err)
        },
      })
      
    } catch (e) {
      console.log(e)
    }
  }
}
updateUser(){

  if ( this.userform.invalid) {
    this.ckForm = true;
    return
}else{
  try {
    console.log(this.userform.value)
    let formData  = new FormData();
    formData.append('image',this.imgs)
     const arr = ['name' , 'email','password','jobtitle','_id']
    // eslint-disable-next-line prefer-const
    for (let key of arr) {
     
      formData.append(key, this.userform.get(key)?.value)
    }
   
    console.log( this.userform.value.id);
    
    this._company.editUser(this.userform.value._id,formData).subscribe({
      next : (res) =>{
        console.log(res)
        this.router.navigate(["admin/user"])
      },
      error : (err) =>{
        console.log(err)
      },
    })
    
  } catch (e) {
    console.log(e)
  }
}
}

removeBtn() {
  this.removeClass = !this.removeClass;
}
}

