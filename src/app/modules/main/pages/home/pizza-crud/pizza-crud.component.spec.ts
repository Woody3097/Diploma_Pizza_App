import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaCrudComponent } from './pizza-crud.component';

describe('PizzaCrudComponent', () => {
  let component: PizzaCrudComponent;
  let fixture: ComponentFixture<PizzaCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzaCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizzaCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
