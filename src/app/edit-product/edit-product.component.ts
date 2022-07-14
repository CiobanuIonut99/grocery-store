import {Component, OnInit} from '@angular/core';
import {ProductService} from "../product-list/product.service";
import {ProductInterface} from "../product-list/product-interface";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  updateProduct(productName: string, productPrice: any, productWeight: any) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    var notUpdatedProduct: ProductInterface | undefined;

    this.productService.getProduct(id).subscribe((data) => {
      notUpdatedProduct = data;
    });


    if (productName.length < 1) {
      var product: any = {
        "productName": notUpdatedProduct?.productName,
        "productPrice": productPrice,
        "productWeight": productWeight
      };

    } else {
      var product: any = {
        "productName": productName,
        "productPrice": productPrice,
        "productWeight": productWeight
      };
    }

    this.productService
      .updateProduct(id, product)
      .subscribe();


    alert('Product edited successfully!')
    this.router.navigate(["/products"])
  }


}
