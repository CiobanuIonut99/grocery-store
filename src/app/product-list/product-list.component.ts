import {Component, OnInit} from '@angular/core';
import {ProductInterface} from "./product-interface";
import {ProductService} from "./product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  title: string = "Product List";

  products: ProductInterface[] = this.productService.getProducts();

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
  }

}
