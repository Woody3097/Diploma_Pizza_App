import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MainComponent } from './main.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { PizzaComponent } from './pages/pizza/pizza.component';
import { CartComponent } from './pages/cart/cart.component';
import { PizzaBuilderComponent } from './pages/pizza-builder/pizza-builder.component';
import { OrderingComponent } from './pages/ordering/ordering.component';
import { AdminPanelComponent } from './pages/admin-panel/admin-panel.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'sign-up',
        component: SignUpComponent,
      },
      {
        path: 'sign-in',
        component: SignInComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'pizza',
        component: PizzaComponent,
      },
      {
        path: 'cart',
        component: CartComponent,
      },
      {
        path: 'pizza-builder',
        component: PizzaBuilderComponent,
      },
      {
        path: 'ordering',
        component: OrderingComponent,
      },
      {
        path: 'admin',
        component: AdminPanelComponent,
      },
      {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
