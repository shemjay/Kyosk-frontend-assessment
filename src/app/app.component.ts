import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './components/test/test.component';

@Component({
  selector: 'app-root',
  imports: [TestComponent],
  template: `<app-test />`,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'shop-app';
}
