import { Component, Inject } from '@angular/core';
import {
  MAT_BOTTOM_SHEET_DATA,
  MatBottomSheet,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { PizzaAddComponent } from '../pizza-add/pizza-add.component';
import { ApiService } from '../../../api/api.service';

@Component({
  selector: 'app-pizza-crud',
  templateUrl: './pizza-crud.component.html',
  styleUrls: ['./pizza-crud.component.scss'],
})
export class PizzaCrudComponent {
  constructor(
    private bottomSheet: MatBottomSheet,
    private _bottomSheetRef: MatBottomSheetRef<PizzaCrudComponent>,
    private api: ApiService,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any
  ) {}

  openLink(event: MouseEvent): void {
    event.preventDefault();
    this.api.deletePizza(this.data.id).subscribe(() => {
      this._bottomSheetRef.dismiss(true);
    });
  }

  openUpdatePizza(): void {
    this._bottomSheetRef.dismiss();
    this.bottomSheet
      .open(PizzaAddComponent, { data: this.data })
      .afterDismissed()
      .subscribe((res) => {
        if (res) {
          location.reload();
        }
      });
  }
}
