import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pizza-builder',
  templateUrl: './pizza-builder.component.html',
  styleUrls: ['./pizza-builder.component.scss'],
})
export class PizzaBuilderComponent {
  sizeOptions: any[] = [
    {
      name: '20 см',
      cost: '120 грн',
      value: 120,
    },
    {
      name: '25 см',
      cost: '150 грн',
      value: 150,
    },
    {
      name: '30 см',
      cost: '200 грн',
      value: 200,
    },
    {
      name: '40 см',
      cost: '260 грн',
      value: 260,
    },
  ];

  crustOptions: any[] = [
    {
      name: 'Товсте',
    },
    {
      name: 'Тонке',
    },
  ];

  sauceOptions: any[] = [
    {
      name: 'Барбекю',
    },
    {
      name: 'Томатний',
    },
    {
      name: 'Часниковий',
    },
  ];

  toppingsOptions: any[] = [
    {
      name: 'Пепероні',
    },
    {
      name: 'Ананас',
    },
    {
      name: 'Кукурудза',
    },
    {
      name: 'Халапеньйо',
    },
    {
      name: 'Цибуля',
    },
    {
      name: 'Гриби',
    },
    {
      name: 'Сир',
    },
    {
      name: 'Курка',
    },
    {
      name: 'Анчоуси',
    },
  ];

  pizza: any = {};
  cost: number = 0;

  changed(data: any): void {
    this.pizza[data.key] = data.value;
    this.cost = this.pizza['Розмір'][0]?.value || 120;

    this.cost += this.pizza['Начинка']?.length * 20;
  }

  constructor(private router: Router) {}

  s() {
    this.pizza.price = this.cost;
    this.pizza.id = Date.now();
    this.pizza.custom = true;
    this.pizza.name = 'На замовлення';

    this.addToCart(this.pizza);
    this.router.navigateByUrl('/cart');
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
