import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaBuilderBlockComponent } from './pizza-builder-block.component';

describe('PizzaBuilderBlockComponent', () => {
  let component: PizzaBuilderBlockComponent;
  let fixture: ComponentFixture<PizzaBuilderBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzaBuilderBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizzaBuilderBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
