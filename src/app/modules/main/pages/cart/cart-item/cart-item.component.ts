import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent {
  @Input() value: number = 1;
  @Input() external: boolean = false;
  @Input() pizza!: any;
  @Output() remove: EventEmitter<any> = new EventEmitter<any>();
  @Output() countChanged: EventEmitter<any> = new EventEmitter<any>();

  removeFromCart() {
    this.remove.emit(this.pizza.id);
  }

  changeValue(newValue: number): void {
    if (newValue <= 0) {
      return;
    }
    this.value = newValue;
    this.countChanged.emit({ id: this.pizza.id, count: newValue });
  }
}
