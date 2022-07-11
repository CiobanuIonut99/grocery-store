import {Injectable} from "@angular/core";
import {ProductInterface} from "./product-interface";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsURL = 'http://localhost:8080';

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

  createProduct(product: ProductInterface): Observable<ProductInterface> {
    return this.httpClient
      .post<ProductInterface>(this.productsURL, JSON.stringify(product), this.httpOptions)
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
