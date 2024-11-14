import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  // Check if 'username' is stored in localStorage
  const username = localStorage.getItem('userName');
  
  // If username exists, return true (allow access), otherwise return false (redirect to login)
  if (username) {
    return true;
  } else {
    // If not authenticated, redirect to login page
    return false;
  }
};
