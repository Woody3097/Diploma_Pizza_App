import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss'],
})
export class AdminPanelComponent {
  mode: string = 'Orders';

  setMode(mode: string): void {
    this.mode = mode;
  }
}
