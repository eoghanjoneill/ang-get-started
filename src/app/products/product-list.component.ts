import { Component, OnInit } from '@angular/core';
import { IProduct } from "./product";
import { ProductService } from './product.service';

@Component({
  selector: 'inv-prod-list',
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
      this.products = this._productService.getProducts();
      this.filteredProducts = this.products;
      //window.alert('yep, that loaded, boysh');
    }

    performFilter(filterBy: string) : IProduct[] {
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