import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { HomeComponent } from './pages/home/home.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { MatIconModule } from '@angular/material/icon';
import { SignInComponent } from './pages/sign-in/sign-in.component';

@NgModule({
  declarations: [MainComponent, HomeComponent, SignUpComponent, SignInComponent],
  imports: [CommonModule, MainRoutingModule, MatIconModule],
})
export class MainModule {}
