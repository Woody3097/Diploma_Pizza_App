import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { PizzaCrudComponent } from './pizza-crud/pizza-crud.component';
import { PizzaAddComponent } from './pizza-add/pizza-add.component';
import { AuthLocatorDirective } from '../../../../shared/auth-locator.directive';
import { ApiService } from '../../api/api.service';
import { filter, interval, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent extends AuthLocatorDirective {
  pizzas$?: Observable<any[]>;
  input: string = '';
  constructor(private _bottomSheet: MatBottomSheet, private api: ApiService) {
    super();
    this.loadNewPizzas();
  }

  loadNewPizzas(): void {
    this.pizzas$ = this.api.getAllPizzas(this.input);
  }

  openBottomSheet(event: any, pizza: any): void {
    event.stopImmediatePropagation();
    this._bottomSheet
      .open(PizzaCrudComponent, { data: pizza })
      .afterDismissed()
      .subscribe((res) => {
        if (res) {
          this.pizzas$ = this.pizzas$?.pipe(
            filter((el: any) => el.id !== pizza.id)
          );
        }
      });
  }

  openAddPizzaModal(): void {
    this._bottomSheet
      .open(PizzaAddComponent)
      .afterDismissed()
      .subscribe((res) => {
        if (res) {
          location.reload();
        }
        // this.pizzas$ = this.pizzas$?.pipe(map((el: any) => [...el, res]));
      });
  }

  addToCart(pizza: any): void {
    let currentCart = [];
    if (localStorage.getItem('cart')) {
      currentCart = JSON.parse(localStorage.getItem('cart')!);
    }

    currentCart.push({ ...pizza, count: 1 });
    localStorage.setItem('cart', JSON.stringify(currentCart));
  }

  removeFromCart(pizzaId: any): void {
    let currentCart = [];
    if (localStorage.getItem('cart')) {
      currentCart = JSON.parse(localStorage.getItem('cart')!);
      currentCart = currentCart.filter((el: any) => {
        if (el.id !== undefined) {
          return el.id !== pizzaId;
        } else {
          return true;
        }
      });
      localStorage.setItem('cart', JSON.stringify(currentCart));
    }
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
}
