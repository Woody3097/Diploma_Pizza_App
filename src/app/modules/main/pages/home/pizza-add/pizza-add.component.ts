import { Component, Inject } from '@angular/core';
import {
  MAT_BOTTOM_SHEET_DATA,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { ApiService } from '../../../api/api.service';

@Component({
  selector: 'app-pizza-add',
  templateUrl: './pizza-add.component.html',
  styleUrls: ['./pizza-add.component.scss'],
})
export class PizzaAddComponent {
  pizza: any = {
    name: '',
    url: '',
    price: '',
    time: '',
    ccal: '',
    weight: '',
    size: '20 см',
    sauce: 'Томатний',
    ingredients: [],
    description: '',
  };

  items: any;
  constructor(
    private _bottomSheetRef: MatBottomSheetRef<PizzaAddComponent>,
    private api: ApiService,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any
  ) {
    if (data) {
      data.ingredients = data.ingredients.map((i: any) => i.name);
      data.sauce = data.sauceId.name;
      data.size = data.sizeId.value;
      this.pizza = data;
    }
    api.getPizzaItems().subscribe((res) => {
      this.items = res;
    });
  }

  transform() {
    // this.pizza.toppings = this.pizza.toppings.map((el: any) => {
    //   return this.items.ingredients.find((i: any) => i.name === el);
    // });

    this.pizza.sizeId = this.items.sizes.find(
      (i: any) => i.value === this.pizza.size
    ).id;

    this.pizza.sauceId = this.items.sauces.find(
      (i: any) => i.name === this.pizza.sauce
    ).id;
  }

  transformS() {
    this.pizza.ingredients = this.pizza.ingredients.map((el: any) => {
      return { id: this.items.ingredients.find((i: any) => i.name === el).id };
    });

    this.pizza.sizeId = this.items.sizes.find(
      (i: any) => i.value === this.pizza.size
    ).id;

    this.pizza.sauceId = this.items.sauces.find(
      (i: any) => i.name === this.pizza.sauce
    ).id;
  }

  createPizza(): void {
    if (this.data) {
      this.transformS();
      delete this.pizza.size;
      delete this.pizza.sauce;
      this.api.updatePizza(this.pizza).subscribe((res) => {
        this._bottomSheetRef.dismiss(res);
      });
    } else {
      this.transform();
      this.api.createPizza(this.pizza).subscribe((res) => {
        this._bottomSheetRef.dismiss(res);
      });
    }
  }

  addTopping(topping: string): void {
    (
      document.getElementById('topping')! as HTMLSelectElement
    ).selectedIndex = 0;
    if (this.pizza.ingredients.includes(topping)) {
      return;
    }
    this.pizza.ingredients.push(topping);
  }

  removeTopping(index: number): void {
    this.pizza.ingredients = this.pizza.ingredients.filter(
      (el: string, i: number) => i !== index
    );
  }

  canCreate(): boolean {
    return (
      this.pizza.name.length &&
      this.pizza.price > 1 &&
      this.pizza.time > 1 &&
      this.pizza.ccal > 1 &&
      this.pizza.weight > 1 &&
      this.pizza.sauce.length &&
      this.pizza.size.length &&
      this.pizza.ingredients.length
    );
  }
}
