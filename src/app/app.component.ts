import { Component } from '@angular/core';

@Component({
  selector: 'inv-root',
  template: `
  <h1>{{pageTitle}}</h1>
  <div>my first component</div>
  `,
  templateUrl: './app.component.html'
})
export class AppComponent {
  pageTitle: string = 'Eoghan\'s inventory';
}