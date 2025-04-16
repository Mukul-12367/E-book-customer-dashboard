import { Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { SignupComponent } from './login/signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookReaderComponent } from './book-reader/book-reader.component';
import { authGuard } from './shared/auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'book/:id', component: BookReaderComponent }
];
