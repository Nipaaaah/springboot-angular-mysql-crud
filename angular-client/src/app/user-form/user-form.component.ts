import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {


  minDate = {year: 1900, month:1, day:1 }; 
  user: User;
  faCalendar = faCalendar; 

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserServiceService) {
    this.user = new User();
  }

  onSubmit(){
    console.log(this.user.nom);
    console.log(this.user.age);
    this.userService.save(this.user).subscribe(resulat => this.goToUserList());
  }

  goToUserList(){
    this.router.navigate(['/users']);
  }

  ngOnInit() {
  }

}
