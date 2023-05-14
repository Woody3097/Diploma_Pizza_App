import { Component } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  UrlSegment,
} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  isAuth: boolean = !!localStorage.getItem('token');
  isHome: boolean;
  constructor(private router: Router) {
    this.isHome =
      !router.url.includes('cart') &&
      !router.url.includes('ordering') &&
      !router.url.includes('sign-in') &&
      !router.url.includes('sign-up');

    router.events.subscribe((res) => {
      if (res instanceof NavigationEnd) {
        this.isHome =
          !router.url.includes('cart') &&
          !router.url.includes('ordering') &&
          !router.url.includes('sign-in') &&
          !router.url.includes('sign-up');
      }
    });
  }
}
