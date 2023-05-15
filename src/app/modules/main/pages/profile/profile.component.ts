import { Component } from '@angular/core';
import { ApiService } from '../../api/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  orders$: Observable<any[]>;
  constructor(private api: ApiService) {
    this.orders$ = this.api.getUserOrders();
  }

  signOut() {
    localStorage.removeItem('id');
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    localStorage.removeItem('cart');
    localStorage.removeItem('isAdmin');
  }
}
