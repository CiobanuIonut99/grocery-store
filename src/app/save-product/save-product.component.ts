import {Component, OnInit} from '@angular/core';
import {ProductInterface} from "../product-list/product-interface";
import {HttpHeaders} from "@angular/common/http";
import {ProductService} from "../product-list/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-save-product',
  templateUrl: './save-product.component.html',
  styleUrls: ['./save-product.component.css']
})
export class SaveProductComponent implements OnInit {

  constructor(private productService: ProductService,
              private router: Router) {
  }

  createProduct(name: string, price: any, weight: any) {
    const product: any = {
      "productName": name,
      "productPrice": price,
      "productWeight": weight
    };

    this.productService.createProduct(product).subscribe(product => {
      console.log(product);
      alert('Product created');
    })
  }

  onBack() {
    this.router.navigate(['/products']);
  }

  ngOnInit(): void {
  }

}
