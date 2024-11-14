import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from '../toast-service.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  username: string | null = '';
  isDropdownVisible: boolean = false;

  constructor(private router: Router, private toastService: ToastService
  ) { }

  ngOnInit(): void {
    // Retrieve the username from localStorage
    this.username = localStorage.getItem('userName');
  }

  // Toggle the visibility of the dropdown menu
  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  // Logout function
  logout() {
    this.toastService.showSuccess('Logout successfully!', 'Success');

    localStorage.removeItem('userName'); // Remove the username from localStorage
    this.router.navigate(['/login']); // Navigate to the login page
  }
}
