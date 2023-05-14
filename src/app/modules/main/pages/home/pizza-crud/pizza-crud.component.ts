import { Component } from '@angular/core';
import {
  MatBottomSheet,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { PizzaAddComponent } from '../pizza-add/pizza-add.component';

@Component({
  selector: 'app-pizza-crud',
  templateUrl: './pizza-crud.component.html',
  styleUrls: ['./pizza-crud.component.scss'],
})
export class PizzaCrudComponent {
  constructor(
    private bottomSheet: MatBottomSheet,
    private _bottomSheetRef: MatBottomSheetRef<PizzaCrudComponent>
  ) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

  openUpdatePizza(): void {
    this._bottomSheetRef.dismiss();
    this.bottomSheet.open(PizzaAddComponent);
  }
}
