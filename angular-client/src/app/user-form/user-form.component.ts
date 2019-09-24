import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  user: User;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserServiceService) {
    this.user = new User();
  }

  onSubmit(){
    this.userService.save(this.user).subscribe(resulat => this.goToUserList());
  }

  goToUserList(){
    this.router.navigate(['/users']);
  }

  ngOnInit() {
  }

}
