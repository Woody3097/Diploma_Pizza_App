import { Component } from '@angular/core';

@Component({
  selector: 'app-pizza-builder',
  templateUrl: './pizza-builder.component.html',
  styleUrls: ['./pizza-builder.component.scss'],
})
export class PizzaBuilderComponent {
  sizeOptions: any[] = [
    {
      name: '20 см',
      cost: '120 грн',
    },
    {
      name: '25 см',
      cost: '150 грн',
    },
    {
      name: '30 см',
      cost: '200 грн',
    },
    {
      name: '40 см',
      cost: '260 грн',
    },
  ];

  crustOptions: any[] = [
    {
      name: 'Товсте',
    },
    {
      name: 'Тонке',
    },
  ];

  sauceOptions: any[] = [
    {
      name: "Барбек'ю",
    },
    {
      name: 'Томатний',
    },
    {
      name: 'Часниковий',
    },
  ];

  toppingsOptions: any[] = [
    {
      name: 'Пепероні',
    },
    {
      name: 'Ананас',
    },
    {
      name: 'Кукурудза',
    },
    {
      name: 'Халапеньйо',
    },
    {
      name: 'Цибуля',
    },
    {
      name: 'Гриби',
    },
    {
      name: 'Сир',
    },
    {
      name: 'Курка',
    },
    {
      name: 'Анчоуси',
    },
  ];
}
