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
import { AuthGuard } from './auth.guard';
import { ProfileGuard } from './profile.guard';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard],
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
        canActivate: [AuthGuard, ProfileGuard],
      },
      {
        path: 'pizza/:id',
        component: PizzaComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'cart',
        component: CartComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'pizza-builder',
        component: PizzaBuilderComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'ordering',
        component: OrderingComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'admin',
        component: AdminPanelComponent,
        canActivate: [AuthGuard],
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
