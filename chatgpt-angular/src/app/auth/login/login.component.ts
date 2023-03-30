import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {

  public loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    //  private authService: AuthService
     ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
   }


  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    // this.authService.login(this.loginForm.value.email, this.loginForm.value.password);
  }
}
