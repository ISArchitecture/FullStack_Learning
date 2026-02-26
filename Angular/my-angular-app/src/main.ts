import { bootstrapApplication } from '@angular/platform-browser';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: 
  `
  <h1>Hello, {{name}}</h1>
  <button (click)="name = 'Angular'">Reset</button>
  <h2>Hello, {{title}}</h2>
  <p> 2 + 3 = {{2 + 3}}</p>
  <p> Upper: {{name.toUpperCase()}}</p>
  `
})
export class App { 
  name = 'World';
  title = 'Angular';
}

bootstrapApplication(App);
