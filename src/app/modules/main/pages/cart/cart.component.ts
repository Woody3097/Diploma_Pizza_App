import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  cart: any[] = [];
  constructor() {
    if (localStorage.getItem('cart')) {
      this.cart = JSON.parse(localStorage.getItem('cart')!);
    }
  }

  removeFromCart(pizzaId: any): void {
    this.cart = this.cart.filter((el: any) => {
      if (el.id !== undefined) {
        return el.id !== pizzaId;
      } else {
        return true;
      }
    });
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  updateCount(data: { id: string; count: number }): void {
    this.cart = this.cart.map((el) => {
      if (el.id === data.id) {
        el.count = data.count;
      }
      return el;
    });

    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
}
