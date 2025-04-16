import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  signup(username: string, password: string) {
    const user = { username, password, token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpvaG5kb2UuZG9lIiwiaWF0IjoxNjc5NzI3MjQwLCJleHBpc' };
    localStorage.setItem('user', JSON.stringify(user));
    return of(user);
  }
}
