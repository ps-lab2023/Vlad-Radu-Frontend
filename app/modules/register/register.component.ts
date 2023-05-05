import { Component } from '@angular/core';
import { UserService } from 'src/app/service/User.service';
import { User } from 'src/app/model/User';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  email: string = "";
  name: string = "";
  username: string = "";
  password: string = "";
  isAdmin: boolean = false;

  constructor(private userService : UserService, private router: Router) { }

  registerNow() {
    var user: User = new User();
    user.email = this.email;
    user.name = this.name;
    user.username = this.username;
    user.password = this.password;
    user.admin = this.isAdmin;

    this.createAccount(user);
    this.router.navigate(['login']);
  }

  createAccount(user: User) {

    this.userService.addUser(user).subscribe(
      (data) => {
        console.log(data);
      }
    )
  }
}
