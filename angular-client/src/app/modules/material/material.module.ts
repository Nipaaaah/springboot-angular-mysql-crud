import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule, MatNativeDateModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule } from '@angular/material';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    MatDatepickerModule, 
    MatNativeDateModule, 
    MatFormFieldModule,
    MatInputModule, 
    MatIconModule, 
    MatButtonModule
  ], 
  exports: [
    MatDatepickerModule, 
    MatNativeDateModule, 
    MatFormFieldModule,
    MatInputModule, 
    MatIconModule, 
    MatButtonModule
  ]
})
export class MaterialModule { }
