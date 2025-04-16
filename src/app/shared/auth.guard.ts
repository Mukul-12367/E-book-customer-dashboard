import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from 'express';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const loggedUser = localStorage.getItem('user');
  if (loggedUser != null) {
    return true;
  } else {
    router.navigateByUrl('login');
    return false;
  }
};
