import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
    private _router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }


  onSubmit(): void {
    if (this.loginForm.invalid) {
      console.log('Form is invalid');
      return;
    }
    const { username, password } = this.loginForm.value;
    let storedUser = localStorage.getItem('user');
    if (storedUser) {
      let user = JSON.parse(storedUser);

      if (username === user.username && password === user.password) {
        alert('Login successful!');
        this._router.navigate(['/dashboard']);
      } else {
        alert('Invalid username or password');
      }
    } else {
      alert('User did not signup!');
    }
  }

  navigateToSignUp() {
    this._router.navigate(['/signup']);
  }
}
