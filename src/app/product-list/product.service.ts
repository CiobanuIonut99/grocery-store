import {Injectable} from "@angular/core";
import {ProductInterface} from "./product-interface";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsURL = 'src/app/product-list/products.json';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) {
  }

  getProducts():Observable<ProductInterface> {
    return this.httpClient
      .get<ProductInterface>(this.productsURL)
      .pipe(retry(1));
  }
}
