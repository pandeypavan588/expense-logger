import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  showPassword = false;

  public loginForm: FormGroup = new FormGroup({
    email: new FormControl('test2@gmail.com', [Validators.required, Validators.email]),
    password: new FormControl('hello123', [Validators.required, Validators.min(8)])
});

  constructor(private router: Router,) { }

  ngOnInit() {}

  doLogin(){

    console.log(this.loginForm.value.email)
    
    console.log(this.loginForm.value.password)

  }

  togglePasswordFieldType(): void {
    this.showPassword = !this.showPassword;
}

}
