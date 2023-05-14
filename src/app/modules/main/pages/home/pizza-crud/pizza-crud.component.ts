import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-pizza-crud',
  templateUrl: './pizza-crud.component.html',
  styleUrls: ['./pizza-crud.component.scss'],
})
export class PizzaCrudComponent {
  constructor(private _bottomSheetRef: MatBottomSheetRef<PizzaCrudComponent>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
