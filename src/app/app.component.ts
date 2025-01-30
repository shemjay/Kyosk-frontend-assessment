import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';

@Component({
  selector: 'app-root',
  imports: [NavComponent],
  template: ` <app-nav /> `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'shop-app';
}
