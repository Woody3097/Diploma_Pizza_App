import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { PizzaCrudComponent } from './pizza-crud/pizza-crud.component';
import { PizzaAddComponent } from './pizza-add/pizza-add.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private _bottomSheet: MatBottomSheet) {}

  openBottomSheet(event: any): void {
    event.stopImmediatePropagation();
    this._bottomSheet.open(PizzaCrudComponent);
  }

  openAddPizzaModal(): void {
    this._bottomSheet.open(PizzaAddComponent);
  }
}
