import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from '../toast-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private toastService: ToastService
  ) {
    // Initialize the login form with validation
    this.loginForm = this.fb.group({
      username: ['', Validators.required],  // Username is required
      password: ['', [Validators.required, Validators.minLength(4)]]  // Password is required and should be at least 4 characters
    });
  }

  ngOnInit(): void {}

  // Method to handle login logic
  onSubmit() {
    // Basic validation check for empty fields
    if (this.loginForm.invalid) {
      if (this.username?.hasError('required')) {
        // alert('Please enter User ID');
      } else if (this.password?.hasError('required')) {
        // alert('Please enter Password');
      } else if (this.password?.hasError('minlength')) {
        // alert('Password must be at least 4 characters');
      }
      return;
    }

    const { username, password } = this.loginForm.value;

    // Simulate login credentials validation
    if (username === 'admin' && password === '1234') {
      this.toastService.showSuccess('Login successful!', 'Success');
      localStorage.setItem('userName', 'Nitin');

      this.route.navigate(['/tasks']);  // Navigate to tasks page on success
    } else {
      this.toastService.showError('Invalid username or password!', 'Wrong Credentials');

    }
  }

  // Getter for easier form validation access in template
  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
