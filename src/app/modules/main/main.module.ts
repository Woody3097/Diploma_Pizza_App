import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { HomeComponent } from './pages/home/home.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { MatIconModule } from '@angular/material/icon';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { PizzaComponent } from './pages/pizza/pizza.component';
import { PizzaBuilderComponent } from './pages/pizza-builder/pizza-builder.component';
import { CartComponent } from './pages/cart/cart.component';
import { CartItemComponent } from './pages/cart/cart-item/cart-item.component';
import { FormsModule } from '@angular/forms';
import { PizzaBuilderBlockComponent } from './pages/pizza-builder/pizza-builder-block/pizza-builder-block.component';
import { OrderingComponent } from './pages/ordering/ordering.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AdminPanelComponent } from './pages/admin-panel/admin-panel.component';
import { OrderCardComponent } from './pages/admin-panel/order-card/order-card.component';
import { PizzaCrudComponent } from './pages/home/pizza-crud/pizza-crud.component';
import { MatListModule } from '@angular/material/list';
import {
  MatBottomSheet,
  MatBottomSheetModule,
} from '@angular/material/bottom-sheet';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PizzaAddComponent } from './pages/home/pizza-add/pizza-add.component';

@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    SignUpComponent,
    SignInComponent,
    ProfileComponent,
    PizzaComponent,
    PizzaBuilderComponent,
    CartComponent,
    CartItemComponent,
    PizzaBuilderBlockComponent,
    OrderingComponent,
    AdminPanelComponent,
    OrderCardComponent,
    PizzaCrudComponent,
    PizzaAddComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatIconModule,
    FormsModule,
    MatCheckboxModule,
    MatListModule,
    MatBottomSheetModule,
  ],
})
export class MainModule {}
