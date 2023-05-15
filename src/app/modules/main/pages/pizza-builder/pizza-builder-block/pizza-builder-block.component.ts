import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pizza-builder-block',
  templateUrl: './pizza-builder-block.component.html',
  styleUrls: ['./pizza-builder-block.component.scss'],
})
export class PizzaBuilderBlockComponent {
  @Input() title!: string;
  @Input() subtitle?: string;
  @Input() set options(options_: any[]) {
    if (options_?.length) {
      this.options_ = options_.map((el) => ({ ...el, selected: false }));
      this.options_[0].selected = true;
      this.changed.emit({
        key: this.title,
        value: this.options_.filter((el) => el.selected),
      });
    }
  }
  @Input() maxSelect: number = 1;
  @Output() changed: EventEmitter<any> = new EventEmitter<any>();

  options_: any[] = [];
  select(index: number): void {
    if (this.maxSelect === 1) {
      this.options_.forEach((el) => (el.selected = false));
      this.options_[index].selected = true;
      this.changed.emit({
        key: this.title,
        value: this.options_.filter((el) => el.selected),
      });
    } else {
      if (this.options_[index].selected) {
        this.options_[index].selected = false;
        this.changed.emit({
          key: this.title,
          value: this.options_.filter((el) => el.selected),
        });
        return;
      }

      const selectedCount = this.options_.reduce(
        (acc, current) => acc + (current.selected as number),
        0
      );
      if (selectedCount < this.maxSelect) {
        this.options_[index].selected = true;
        this.changed.emit({
          key: this.title,
          value: this.options_.filter((el) => el.selected),
        });
      } else {
        alert('Ти можеш вибрати тільки ' + this.maxSelect);
      }
    }
  }
}
