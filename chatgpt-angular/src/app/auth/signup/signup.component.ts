import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  // public signUpForm: FormGroup;
  // name!: string;
  // email!: string;
  // password!: string;
  // error!: string;
  // auth: any;

  // constructor(
  //   private fb: FormBuilder,
  //    private authService: AuthService
  //    ) {
  //   this.signUpForm = this.fb.group({
  //     password:[''],
  //     email:[''],
  //     confirmPassword:['']
  //   })
  //  }

  // onSubmit() {
  //   this.auth.signup(this.name, this.email, this.password).subscribe(
  //     (response: any) => {
  //       // save token and redirect to dashboard
  //     },
  //     (error: any) => {
  //       this.error = error.message;
  //     }
  //   );
  // }
}
