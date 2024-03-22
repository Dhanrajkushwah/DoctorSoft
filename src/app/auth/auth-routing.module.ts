import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { StaffRegisterComponent } from './staff-register/staff-register.component';
import { PatientRegisterComponent } from './patient-register/patient-register.component';


const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'signin',
        loadChildren: () =>
          import('./signin/signin.module').then((m) => m.SigninModule),
      },
      {
        path: 'signup',
        loadChildren: () =>
          import('./signup/signup.module').then((m) => m.SignupModule),
      },
      {
        path: 'forgetpassword',
        loadChildren: () =>
          import('./forgetpassword/forgetpassword.module').then(
            (m) => m.ForgetpasswordModule
          ),
      },
      
      {
        path: 'staffregister',
        component :StaffRegisterComponent
      },
      {
        path: 'patientegister',
        component :PatientRegisterComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
