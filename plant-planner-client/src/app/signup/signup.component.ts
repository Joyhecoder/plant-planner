import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
// import { User } from '../models/user'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent { 
  // newUser = {};

  // constructor(private auth:AuthService) {}

  // signup() {
  //   this.auth.signup(this.newUser).subscribe(
  //     response => {
  //       console.log(response);
  //       // Handle success
  //     },
  //     error => {
  //       console.error(error);
  //       // Handle error
  //     }
  //   );
  // }
  // ngOnInit(): void {
  //   console.log(this.auth.test());
  // }
  signup() {
    console.log("signup button clicked!")
  }
  // signup(): void {
  //   this.auth.register(this.user)
  //   .then((user) => {
  //     console.log(user.json());
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  // }

}
