import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../api/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss'],
})
export class PizzaComponent {
  pizza$: Observable<any>;
  constructor(private route: ActivatedRoute, private api: ApiService) {
    this.pizza$ = this.api.getPizza(this.route.snapshot.params['id']);
  }

  inCart(pizzaId: number): boolean {
    let currentCart = [];
    if (localStorage.getItem('cart')) {
      currentCart = JSON.parse(localStorage.getItem('cart')!);
      return !!currentCart.find((el: any) => el.id === pizzaId);
    } else {
      return false;
    }
  }

  addToCart(pizza: any): void {
    let currentCart = [];
    if (localStorage.getItem('cart')) {
      currentCart = JSON.parse(localStorage.getItem('cart')!);
    }

    currentCart.push({ ...pizza, count: 1 });
    localStorage.setItem('cart', JSON.stringify(currentCart));
  }
}
