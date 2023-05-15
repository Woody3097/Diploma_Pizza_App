import { Component } from '@angular/core';
import { ApiService } from '../../api/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ordering',
  templateUrl: './ordering.component.html',
  styleUrls: ['./ordering.component.scss'],
})
export class OrderingComponent {
  name: string = '';
  phone: string = '';
  city: string = '';
  address: string = '';
  time: string = '';
  callback: boolean = false;
  total: number;
  constructor(private api: ApiService, private router: Router) {
    this.total = this.getTotal();
  }

  makeOrder(): void {
    const order = {
      status: 'Очікування',
      total: this.getTotal(),
      userId: localStorage.getItem('id'),
      orderBody: {
        name: this.name,
        phone: this.phone,
        city: this.city,
        address: this.address,
        time: this.time,
        callback: this.callback,
        cart: JSON.parse(localStorage.getItem('cart')!),
      },
    };

    this.api.createOrder(order).subscribe(() => {
      alert('Замовлення відправлено!');
      localStorage.removeItem('cart');
      this.router.navigateByUrl('/home');
    });
  }

  getTotal() {
    const cart = JSON.parse(localStorage.getItem('cart')!);

    let total = 0;
    cart?.forEach((el: any) => {
      total += +el.price * el.count;
    });

    return total;
  }
}
