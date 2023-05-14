import { Component } from '@angular/core';
import { ApiService } from '../../api/api.service';
import { Router } from '@angular/router';
import { catchError, EMPTY, take } from 'rxjs';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  email: string = '';
  password: string = '';
  error: string = '';

  constructor(private apiService: ApiService, private router: Router) {}

  signIn(): void {
    this.error = '';
    if (!this.canSignIn()) {
      return;
    }

    this.apiService
      .signIn({ email: this.email, password: this.password })
      .pipe(
        take(1),
        catchError((er: any) => {
          this.error = er?.error?.message || 'Щось сталось, спробуйте знову';
          return EMPTY;
        })
      )
      .subscribe((res) => {
        if (res) {
          localStorage.setItem('id', res.id);
          localStorage.setItem('email', res.email);
          localStorage.setItem('password', res.password);
          localStorage.setItem('isAdmin', res.isAdmin);
          this.router.navigateByUrl('/home');
        }
      });
  }

  canSignIn(): boolean {
    return this.password.length > 0 && this.email.length > 0;
  }
}
