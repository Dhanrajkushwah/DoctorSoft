import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeatherModule } from 'angular-feather';
import { LoaderComponent } from './common-component/loader/loader.component';
import { sharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollDirective } from './component/directives/scroll.directive';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { MaterialModule } from './shared/material/material.module';
import { MatSnackBar } from '@angular/material/snack-bar';
@NgModule({
  declarations: [AppComponent, LoaderComponent, 
    
  ],
  imports: [BrowserModule, AppRoutingModule,MaterialModule, sharedModule, BrowserAnimationsModule, AngularEditorModule ],
  exports: [FeatherModule],
  bootstrap: [AppComponent],
  providers:[MatSnackBar]
  
})
export class AppModule {}
