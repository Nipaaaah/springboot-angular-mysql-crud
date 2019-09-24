import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserServiceService } from './services/user-service.service';
import { HttpClientModule } from '@angular/common/http';
import { UserFormComponent } from './user-form/user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserEditFormComponent } from './user-edit-form/user-edit-form.component';
import { MatDatepicker, MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule, NgbDateAdapter, NgbDateStruct, NgbDateNativeAdapter } from '@ng-bootstrap/ng-bootstrap'; 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; 


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserFormComponent,
    UserDetailsComponent,
    UserEditFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule, 
    FormsModule, 
    ReactiveFormsModule, 
    MatDatepickerModule, 
    MatNativeDateModule, 
    MatFormFieldModule,
    MatInputModule, 
    BrowserAnimationsModule, 
    NgbModule, 
    FontAwesomeModule
  ],
  providers: [UserServiceService, {provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}],
  bootstrap: [AppComponent]
})
export class AppModule { }
