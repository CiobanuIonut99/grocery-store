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
  showProducts: boolean = true;
  getButtonName: string ='GetProducts';
  products: any = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {

  }

  getProducts() {

    if(this.showProducts){
      this.productService.getProducts().subscribe((data: ProductInterface) => {
        console.log(data);
        this.products = data;
        this.showProducts = false;
        this.getButtonName ='HideProducts';
      })
    } else{
      this.products = [];
      this.showProducts = true;
      this.getButtonName='ShowProducts'
    }

  }

}
