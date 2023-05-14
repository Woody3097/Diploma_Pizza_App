import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-pizza-add',
  templateUrl: './pizza-add.component.html',
  styleUrls: ['./pizza-add.component.scss'],
})
export class PizzaAddComponent {
  toppings: string[] = [];
  constructor(private _bottomSheetRef: MatBottomSheetRef<PizzaAddComponent>) {}
  createPizza(): void {
    this._bottomSheetRef.dismiss();
  }

  addTopping(topping: string): void {
    (
      document.getElementById('topping')! as HTMLSelectElement
    ).selectedIndex = 0;
    if (this.toppings.includes(topping)) {
      return;
    }
    this.toppings.push(topping);
  }

  removeTopping(index: number): void {
    if (index === 0) {
      this.toppings.shift();
      return;
    }

    this.toppings = this.toppings.splice(index, 1);
  }
}
