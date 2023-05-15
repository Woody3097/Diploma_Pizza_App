import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  signUp(data: any): Observable<any> {
    return this.http.post('http://localhost:3000/users/signUp', data);
  }

  signIn(data: any): Observable<any> {
    return this.http.post('http://localhost:3000/users/signIn', data);
  }

  getAllPizzas(input?: string): Observable<any> {
    return this.http.get(
      'http://localhost:3000/pizzas/getAllPizzas?search=' + input
    );
  }

  getPizza(pizzaId: string): Observable<any> {
    return this.http.get(
      'http://localhost:3000/pizzas/getPizza?pizzaId=' + pizzaId
    );
  }
}
