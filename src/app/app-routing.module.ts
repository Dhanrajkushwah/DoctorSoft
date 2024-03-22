import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard , } from './auth/guard/admin/login.guard';
import { NotShowLoginPageGuard } from './auth/guard/admin/not-show-login-page.guard';

const routes: Routes = [
{ path : "",
 redirectTo : 'sign-in',
  pathMatch : 'full'

},
  {
    path: 'super-admin',
    loadChildren: () =>
      import('./component/super-admin/super-admin.module').then(
        (s) => s.SuperAdminModule
      ),
      canActivate : [LoginGuard]
  },
  
  // {
  //   path: 'landing',
  //   loadChildren: () =>
  //     import('./core-component/transfer/addtransfer/addtransfer.module').then(
  //       (s) => s.AddtransferModule
  //     ),
  //     canActivate : [NotShowLoginPageGuard]
  // },
  
  {
    path : 'admin',
    loadChildren : ()=> import('./component/admin/admin.module').then((a)=>a.AdminModule),
    canActivate : [LoginGuard]
  },
  
  {
    path : 'user',
    loadChildren : ()=> import('./component/user/user.module').then((u)=>u.UserModule),
    canActivate : [LoginGuard]
  },
  
  {
    path : 'client',
    loadChildren : ()=> import('./component/client/client.module').then((c)=>c.ClientModule),
        canActivate : [LoginGuard]
  },

  {
    path : 'sign-in',
    loadChildren : ()=> import('./auth/auth.module').then((c)=>c.AuthModule),
 
  },
  // {
  //   path: '',
  //   loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  // },
  {
    path: 'errorpages',
    loadChildren: () =>
      import('./core-component/errorpages/errorpages.module').then((m) => m.ErrorpagesModule),
  },
  // {
  //   path: '**',
  //   redirectTo: 'errorpages/error404',
  //   pathMatch: 'full',
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
