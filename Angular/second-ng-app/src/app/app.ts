import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <h1>Hello, {{ title() }}</h1>
    <p>This is a paragraph</p>
    <router-outlet />
  `,
  styles: [
    `
    p{
      background-color: grey;
    }
    `
  ],
})
export class App {
  protected readonly title = signal('second-ng-app');
}
