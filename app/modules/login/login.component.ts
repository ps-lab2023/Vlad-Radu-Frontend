import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/User.service';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  username: string = "";
  password: string = "";
  users: User[] = [];


  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getAllUsers().subscribe(
      (data) => {
        this.users = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    )
  }

  loginUser() {
    var userFound: boolean = false;
    for(let user of this.users) {
      if(user.username == this.username && user.password == this.password) {
        console.log("User found");
        userFound = true;
        this.checkUser(user);
      }
    }
    if(!userFound){
      console.log("User not found");
    }
  }

  checkUser(user: User) {
    if(user.admin) {
      this.router.navigate(['admin']);
    } else {
      this.router.navigate(['user/' + user.id]);
    }
  }

}
