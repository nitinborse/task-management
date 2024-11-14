import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  isUserLoggedIn: boolean = false;
  isLoginPage: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    const username = localStorage.getItem('userName');
    this.isUserLoggedIn = !!username;

    // If username doesn't exist, navigate to login page
    if (!username) {
      this.router.navigate(['/login']); // Redirect to login page
    } else {
      this.isUserLoggedIn = true; // Set user as logged in
    }
    
    // Check if the current route is the login page
    this.router.events.subscribe(() => {
      this.isLoginPage = this.router.url === '/login';
    });
  }
}