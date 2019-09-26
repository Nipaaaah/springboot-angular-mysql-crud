import { Component, OnInit, Input, Output, EventEmitter, Directive, ChangeDetectorRef } from '@angular/core';
import { User } from '../models/user';
import { UserServiceService } from '../services/user-service.service';
import { filter } from 'minimatch';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})


export class UserListComponent implements OnInit {

  users: User[]
  user: User

  
  constructor(private userService: UserServiceService, private router: Router, private cd: ChangeDetectorRef) { }


  ngOnInit() {
    this.userService.findAll().subscribe(data => {
      this.users = data; 
    });
  }


  deleteUser(user: User): void{
    if(window.confirm("Supprimer ?")){
      this.userService.deleteUser(user.id).subscribe(data => {
        this.users = this.users.filter(u => u !== user);
      });
    }; 
  }


  findUser(id: number): any{
    this.router.navigate(['/users', id]); 
  }


  editUser(user: User): void{
    window.localStorage.removeItem("editUserId");
    window.localStorage.setItem("editUserId", user.id.toString()); 
    this.router.navigate(['/editUser']);  
  }
}