import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { IProduct } from './product';

@Injectable()
export class ProductService {
    private _productUrl = './api/products/products.json';

    constructor(private _http: HttpClient) {}

    getProducts(): Observable<IProduct[]> {
      return this._http.get<IProduct[]>(this._productUrl)
        .do(data => console.log(`All: ${JSON.stringify(data)}`))
        .catch(this.handleError);
    }

    getProduct(id: number): Observable<IProduct> {
      return this.getProducts().map((products) => {
        return products.find((product) => product.productId === id);
      });
    }

    getProduct2(id: number): Observable<IProduct> {
        return new Observable(observer => {
          this.getProducts().subscribe((products) => {
            let prod = products.find(p => p.productId === id);
            prod.productName += ', but the good kind';
            observer.next(prod);
          });
        });
    }

    private handleError(err: HttpErrorResponse) {
      console.log(err.message);
      return Observable.throw(err.message);
    }
}