import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.signupForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, { validator: this.passwordMatcher });
  }

  passwordMatcher(signup: FormGroup): { [key: string]: boolean } | null {
    const password = signup.get('password')?.value;
    const confirmPassword = signup.get('confirmPassword')?.value;

    if (password && confirmPassword && password !== confirmPassword) {
      signup.get('confirmPassword')?.setErrors({ mismatch: true });
      return { mismatch: true };
    }

    if (password && confirmPassword && password === confirmPassword) {
      signup.get('confirmPassword')?.setErrors(null);
    }

    return null;
  }

  onSubmit() {
    if (this.signupForm.invalid) {
      return;
    }
    const { username, password } = this.signupForm.value;

    this.authService.signup(username, password).subscribe(
      (response) => {
        alert('User signed up successfully')
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Signup failed', error);
      }
    );
  }
}
