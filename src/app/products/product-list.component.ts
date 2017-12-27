import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'This is the inventory of magical objects';
  showImages: boolean = false;
  infoState: string = '.hidden';
  infoMessage: string = '';

  constructor(private _productService: ProductService) {

  }

  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this._listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  filteredProducts: IProduct[];
  products: IProduct[];

  toggleImages(): void {
    this.showImages = !this.showImages;
  }

  ngOnInit(): void {
    this._productService.getProducts()
      .subscribe(products => this.products = products,
        error => this.infoMessage = <any>error,
        () => this.filteredProducts = this.products);

    // this.filteredProducts = this.products;
    // window.alert('yep, that loaded, boysh');
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  onNotify(message: string): void {
    this.infoMessage = message;
    this.infoState = 'bg-info';
  }

  onClear(): void {
    this.infoState = '.hidden';
    this.infoMessage = '';
  }
}
