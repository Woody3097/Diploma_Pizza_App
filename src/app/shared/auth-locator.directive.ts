import { Directive } from '@angular/core';

@Directive({
  selector: '[appAuthLocator]',
})
export class AuthLocatorDirective {
  isAdmin: boolean = localStorage.getItem('isAdmin') === 'true';
  constructor() {}
}
