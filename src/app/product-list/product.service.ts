import {Injectable} from "@angular/core";
import {ProductInterface} from "./product-interface";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsURL = 'http://localhost:8080/products/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) {
  }

  getProducts(): Observable<ProductInterface> {
    return this.httpClient
      .get<ProductInterface>(this.productsURL)
      .pipe(retry(1), catchError(this.handleError))
  };

  getProduct(id: number): Observable<ProductInterface> {
    return this.httpClient
      .get<ProductInterface>(this.productsURL + id)
      .pipe(retry(1), catchError(this.handleError));
  }

  createProduct(product: ProductInterface): Observable<ProductInterface> {
    return this.httpClient
      .post<ProductInterface>(this.productsURL, JSON.stringify(product), this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  deleteProduct(id: number) {
    return this.httpClient
      .delete(this.productsURL + id, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  updateProduct(id: number, product: ProductInterface): Observable<ProductInterface>{
    return this.httpClient
      .put<ProductInterface>(this.productsURL + id, JSON.stringify(product), this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));

  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = err.error.message + 'error occurred';

    } else {
      errorMessage = 'Server return code: ' + err.status + ', error message is: ' + err.message;
    }
    console.error(errorMessage);
    return throwError(() => {
      return errorMessage;
    })
  }

}
