import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { StaffRegisterComponent } from './staff-register/staff-register.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { PatientRegisterComponent } from './patient-register/patient-register.component';
import { MatOptionModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';

import { MatInputModule } from '@angular/material/input';

import { MatFormFieldModule } from "@angular/material/form-field";
import { AngularSignaturePadModule } from '@almothafar/angular-signature-pad';
import {MatSelectModule} from '@angular/material/select';
import { MaterialModule } from '../shared/material/material.module';
@NgModule({
  declarations: [
    AuthComponent,
    StaffRegisterComponent,
    PatientRegisterComponent,
 
  
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  MatInputModule,
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  MatTableModule,
  MatOptionModule,
  MatFormFieldModule,
  MatInputModule,
  AngularSignaturePadModule,
  MatSelectModule,
  MaterialModule
  ]
})
export class AuthModule { }
