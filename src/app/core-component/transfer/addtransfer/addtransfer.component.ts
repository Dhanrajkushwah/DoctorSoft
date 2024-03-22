import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/component/super-admin/services/company.service';

@Component({
  selector: 'app-addtransfer',
  templateUrl: './addtransfer.component.html',
  styleUrls: ['./addtransfer.component.scss'],
})
export class AddtransferComponent {
  planData: any = [];
  currentYear: any

  constructor(private service: CompanyService, private router: Router) {
    
  }

  ngOnInit(): void {
    this.getPlan();
    this.currentYear = new Date().getFullYear();
  }

  login() {
    this.router.navigate(['sign-in/signin'])
  }

  register(){
    this.router.navigate(['sign-in/signup'])
  }

  getPlan() {
    this.service.getPlan().subscribe(res => {
      this.planData = res
    })
  }
}