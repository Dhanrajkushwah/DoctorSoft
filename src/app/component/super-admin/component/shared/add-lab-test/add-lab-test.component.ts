import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CompanyService } from '../../../services/company.service';

@Component({
  selector: 'app-add-lab-test',
  templateUrl: './add-lab-test.component.html',
  styleUrls: ['./add-lab-test.component.scss']
})
export class AddLabTestComponent {
  addLabtest!: FormGroup;
  ck: boolean = false;
  labtestData: any = [];
  allCategory: any = [];
  labimage!:File;
  imagesBox = '../../../../../../assets/img/product/product1.jpg'
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private service: CompanyService) {

  }

  ngOnInit(): void {
    this.addLabtest = this.fb.group({
      testName: ['', Validators.required],
      testPrice: ['', Validators.required],
      testImage: ['', Validators.required],
      testCategory: ['', Validators.required],
      testDescription: ['', Validators.required],
    })
      this.service.getlabtest().subscribe(res => {
        this.labtestData = res
      })
  }

  addLabtests() {
    if (this.addLabtest.invalid) {
      this.ck = true;
      return
    }
    else {
      let formdata: FormData = new FormData()
      formdata.append('testName', this.addLabtest.value.testName)
      formdata.append('testPrice', this.addLabtest.value.testPrice)
      formdata.append('testImage', this.labimage)
      formdata.append('testCategory', this.addLabtest.value.testCategory)
      formdata.append('testDescription', this.addLabtest.value.testDescription)
      this.service.addLabtest(formdata).subscribe({
        next: (res) => {
          this.router.navigate(["super-admin/labtest"])
        },
        error: (err) => { console.log(err) }
      })
    }
  }
  OnLabImage(event: any) {
    if (event.target.files.length > 0) {
      this.labimage = event.target.files[0];
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
 
  cancel() {
    // alert("hello9")
    this.router.navigate(["super-admin/labtest"])
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

