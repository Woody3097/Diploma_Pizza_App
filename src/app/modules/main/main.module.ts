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

@NgModule({
  declarations: [MainComponent, HomeComponent, SignUpComponent, SignInComponent, ProfileComponent, PizzaComponent, PizzaBuilderComponent, CartComponent],
  imports: [CommonModule, MainRoutingModule, MatIconModule],
})
export class MainModule {}
