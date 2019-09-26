import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { UserServiceService } from './services/user-service.service';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserEditFormComponent } from './user-edit-form/user-edit-form.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule, NgbDateAdapter, NgbDateNativeAdapter,  NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap'; 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; 
import { registerLocaleData } from '@angular/common'; 
import localeFr from '@angular/common/locales/fr';
import { MaterialModule } from './modules/material/material.module';

registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserFormComponent,
    UserDetailsComponent,
    UserEditFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule, 
    BrowserAnimationsModule, 
    FormsModule, 
    ReactiveFormsModule, 
    MaterialModule, 

    NgbModule, 
    FontAwesomeModule, 
    ReactiveFormsModule, 
    NgbPaginationModule
   
  ],
  providers: [UserServiceService, {provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}],
  bootstrap: [AppComponent]
})
export class AppModule { 
   
}
