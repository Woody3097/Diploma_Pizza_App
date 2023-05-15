import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../api/api.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss'],
})
export class AdminPanelComponent {
  // setMode(mode: string): void {
  //   this.mode = mode;
  // }

  orders$: Observable<any[]>;
  constructor(private api: ApiService) {
    this.orders$ = this.api.getAllOrders();
  }

  acceptOrder(id: number) {
    this.api.acceptOrder(id).subscribe(() => {});
  }

  signOut() {
    localStorage.removeItem('id');
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    localStorage.removeItem('cart');
    localStorage.removeItem('isAdmin');
  }
}
