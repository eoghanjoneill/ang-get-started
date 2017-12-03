import { Component } from '@angular/core';
import { ProductService } from './products/product.service';

@Component({
  selector: 'inv-root',
  template: `
  <h1>{{pageTitle}}</h1>
  <div>my first component</div>
  `,
  templateUrl: './app.component.html',
  providers: [ProductService]
})
export class AppComponent {
  pageTitle: string = 'Eoghan\'s inventory';
}