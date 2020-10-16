import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  showPassword = false;

    public registerForm: FormGroup = new FormGroup({
        name: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.email, Validators.required]),
        password: new FormControl('', [Validators.min(8), Validators.required]),
        passwordConfirm: new FormControl('', [Validators.min(8), Validators.required,])
    });

  constructor() { }

  ngOnInit() {}

  doRegister(): void {
    console.log(this.registerForm.value.email);
    console.log(this.registerForm.value.password)
  }

  togglePasswordFieldType(): void {
    this.showPassword = !this.showPassword;
}

checkFieldValidity(control: string): void {
    // const cont = this.registerForm.controls[control]
}

}
