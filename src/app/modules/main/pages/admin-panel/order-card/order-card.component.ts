import { Component, Input } from '@angular/core';
import { AuthLocatorDirective } from '../../../../../shared/auth-locator.directive';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.scss'],
})
export class OrderCardComponent extends AuthLocatorDirective {
  @Input() order?: any;
  @Input() no!: number;
  pizzas: any[] = [];
  constructor() {
    super();
    this.checkForOrder();
  }

  checkForOrder() {
    if (!this.order) {
      setTimeout(() => this.checkForOrder(), 200);
    } else {
      this.pizzas = JSON.parse(this.order.orderBody).cart;
      this.order.orderBody = JSON.parse(this.order.orderBody);
    }
  }
}
