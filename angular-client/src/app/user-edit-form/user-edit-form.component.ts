import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';
import { first } from 'rxjs/operators'; 
@Component({
  selector: 'app-user-edit-form',
  templateUrl: './user-edit-form.component.html',
  styleUrls: ['./user-edit-form.component.css']
})
export class UserEditFormComponent implements OnInit {

  user: User;
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserServiceService ) { }

  ngOnInit() {
    let userId = window.localStorage.getItem("editUserId");

    if(!userId) {
      alert("Invalid action")
      this.router.navigate(['/users']); 
      return;
    }

    this.editForm = this.formBuilder.group({
      id: [''], 
      nom: ['', Validators.required], 
      prenom: ['', Validators.required], 
      mail: ['', Validators.required], 
      age: ['', Validators.required],
      adresse: ['', Validators.required],
      telephone: ['', Validators.required],   
    }); 

    

    this.userService.findUser(+userId).subscribe( data => {
      console.log("Date naissance: " + data.age);
      this.editForm.setValue({
        id: userId, 
        nom: data.nom, 
        prenom: data.prenom,
        mail: data.mail, 
        age: data.age, 
        adresse: data.adresse, 
        telephone: data.telephone
      }); 
    }); 
  }

  onSubmit(){
    console.log(this.editForm.value); 
    this.userService.updateUser(this.editForm.value).pipe(first()).subscribe(
      data => {
        this.router.navigate(['/users']);  
      }, 
      error => {
        alert(error); 
      }
    ); 
  }
}
