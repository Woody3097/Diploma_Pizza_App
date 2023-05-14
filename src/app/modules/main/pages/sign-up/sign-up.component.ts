import { Component } from '@angular/core';
import { ApiService } from '../../api/api.service';
import { catchError, EMPTY, take } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  email: string = '';
  password: string = '';
  error: string = '';

  constructor(private apiService: ApiService, private router: Router) {}

  signUp(): void {
    if (!this.canSignUp()) {
      return;
    }

    this.apiService
      .signUp({ email: this.email, password: this.password })
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

  canSignUp(): boolean {
    return (
      this.password.length > 4 &&
      this.email.length > 5 &&
      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(this.email)
    );
  }
}
