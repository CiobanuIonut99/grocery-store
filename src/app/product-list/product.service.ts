import {Injectable} from "@angular/core";
import {ProductInterface} from "./product-interface";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getProducts(): ProductInterface[] {
    return [
      {
        productId: 1,
        productName: "Milk",
        productPrice: 1.3,
        productWeight: 1000
      },
      {
        productId: 2,
        productName: "Sugar",
        productPrice: 1,
        productWeight: 1000
      },
      {
        productId: 3,
        productName: "Strawberry",
        productPrice: 2,
        productWeight: 1000
      },
      {
        productId: 4,
        productName: "Peanuts",
        productPrice: 1.6,
        productWeight: 100
      }
    ];
  }
}
