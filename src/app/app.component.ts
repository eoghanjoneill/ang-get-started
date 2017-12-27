import { Component } from '@angular/core';
import { ProductService } from './products/product.service';

@Component({
  selector: 'inv-root',
  templateUrl: './app.component.html',
  providers: [ProductService]
})
export class AppComponent {
  pageTitle: string = 'Eoghan\'s inventory';
}
